'use client';

import { Box, Button, CompactDetails, Heading, Paragraph, SlotDialog, Switch, Table } from '@kystverket/styrbord';
import type { ConsentCategory, ConsentService } from '../../utility/consent.types';
import { useConsentStore } from '../../utility/consentContext';
import { getSelectableCategories } from '../../utility/consentStore';
import { formatCookieDuration, type ConsentTranslations } from '../../utility/translations';
import { useStoreValue } from '../../hooks/useStoreValue';
import styles from './ConsentPreferencesDialog.module.css';

/**
 * Informasjonskapslene en gruppe tjenester setter, som en sammenleggbar tabell.
 *
 * Detaljene hører hjemme her, i dialogen der valget faktisk tas, framfor på en egen side.
 * De ligger bak et klikk fordi de færreste vil se dem, men de som vil skal slippe å lete.
 */
function CookieDetails({
  services,
  translations,
}: Readonly<{ services: ConsentService[]; translations: ConsentTranslations }>) {
  // Skiller mellom «tjenesten setter ingen kapsler» og «vi har ikke oppgitt noe»: det første
  // er informasjon brukeren har nytte av, det andre er en mangel vi ikke skal pynte på.
  const declaresCookies = services.some((service) => service.cookies !== undefined);
  if (!declaresCookies) {
    return null;
  }

  const rows = services.flatMap((service) =>
    (service.cookies ?? []).map((cookie) => ({ ...cookie, provider: service.displayName ?? service.id })),
  );

  if (rows.length === 0) {
    return <Paragraph data-size="xs">{translations.dialog.noCookies}</Paragraph>;
  }

  return (
    <CompactDetails label={translations.dialog.showCookies}>
      <Table width="full" data-size="sm">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>{translations.dialog.cookieName}</Table.HeaderCell>
            <Table.HeaderCell>{translations.dialog.cookieProvider}</Table.HeaderCell>
            <Table.HeaderCell>{translations.dialog.cookieDuration}</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={`${row.provider}-${row.name}`}>
              <Table.Cell>
                <code>{row.name}</code>
              </Table.Cell>
              <Table.Cell>{row.provider}</Table.Cell>
              <Table.Cell>{formatCookieDuration(row.duration, translations)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </CompactDetails>
  );
}

/** Navnene på tjenestene i en gruppe, f.eks. «Tjenester: Hotjar». */
function ServiceNames({
  services,
  translations,
}: Readonly<{ services: ConsentService[]; translations: ConsentTranslations }>) {
  if (services.length === 0) {
    return null;
  }

  return (
    <Paragraph data-size="xs">
      {translations.dialog.servicesLabel}: {services.map((service) => service.displayName ?? service.id).join(', ')}
    </Paragraph>
  );
}

/**
 * Innstillingsdialogen, der brukeren slår kategorier av og på enkeltvis.
 *
 * Kategoriene utledes av tjenestene applikasjonen faktisk laster — vi viser ikke valg som ikke
 * styrer noe. Tjenester som går uten samtykke får sin egen «alltid på»-seksjon, slik at de er
 * synlige selv om de ikke kan slås av; ellers ville en kapselfri tjeneste som Plausible vært
 * usynlig for brukeren.
 */
export function ConsentPreferencesDialog() {
  const { store, translations, mounted } = useConsentStore();

  const activeUI = useStoreValue(store, (state) => state.activeUI);
  const selectedConsents = useStoreValue(store, (state) => state.selectedConsents);
  const scripts = useStoreValue(store, (state) => state.scripts) as ConsentService[];

  const categories = getSelectableCategories(scripts);
  const { setConsent, saveConsents, setActiveUI } = store.getState();

  if (!mounted) {
    return null;
  }

  const necessaryServices = scripts.filter((script) => script.category === 'necessary');
  const alwaysOnServices = scripts.filter((script) => script.alwaysLoad && script.category !== 'necessary');
  const servicesInCategory = (category: ConsentCategory) =>
    scripts.filter((script) => !script.alwaysLoad && script.category === category);

  return (
    <SlotDialog
      title={translations.dialog.heading}
      open={activeUI === 'dialog'}
      onClose={() => setActiveUI('none')}
      size="md"
      longContent
    >
      <Box gap={24}>
        <Paragraph data-size="sm">{translations.dialog.body}</Paragraph>

        <div className={styles.categories}>
          <section className={styles.category}>
            <Heading level={3} data-size="2xs">
              {translations.categories.necessary.title}
            </Heading>
            <Paragraph data-size="sm">{translations.categories.necessary.description}</Paragraph>
            <CookieDetails services={necessaryServices} translations={translations} />
          </section>

          {alwaysOnServices.length > 0 && (
            <section className={styles.category}>
              <Heading level={3} data-size="2xs">
                {translations.dialog.alwaysOnHeading}
              </Heading>
              <Paragraph data-size="sm">{translations.dialog.alwaysOnBody}</Paragraph>
              <ServiceNames services={alwaysOnServices} translations={translations} />
              <CookieDetails services={alwaysOnServices} translations={translations} />
            </section>
          )}

          {categories.map((category) => {
            const services = servicesInCategory(category);
            return (
              <section key={category} className={styles.category}>
                <Switch
                  label={translations.categories[category].title}
                  description={translations.categories[category].description}
                  checked={selectedConsents[category] === true}
                  onChange={(event) => setConsent(category, event.target.checked)}
                />
                <div className={styles.services}>
                  <ServiceNames services={services} translations={translations} />
                  <CookieDetails services={services} translations={translations} />
                </div>
              </section>
            );
          })}
        </div>
      </Box>

      <SlotDialog.Buttons>
        <Button variant="filled" onClick={() => saveConsents('custom')}>
          {translations.dialog.savePreferences}
        </Button>
        <Button variant="outline" onClick={() => saveConsents('all')}>
          {translations.dialog.acceptAll}
        </Button>
        <Button variant="ghost" onClick={() => saveConsents('necessary')}>
          {translations.dialog.rejectAll}
        </Button>
      </SlotDialog.Buttons>
    </SlotDialog>
  );
}
