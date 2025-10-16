import classes from './Footer.module.css';
import { Logo, Link, Icon } from '~/main';
import { SupportedLanguage } from '~/utils/types';
import { useTranslation } from '~/i18n/translations';
import { Select } from '@digdir/designsystemet-react';
import { ReactNode } from 'react';

interface LinkToSite {
  text: string;
  url: string;
}

const defaultContactLinks: LinkToSite[] = [
  {
    text: 'Kontakt Kystverket',
    url: 'https://www.kystverket.no/kontakt-oss/',
  },
  { text: 'Lostjenesten', url: 'https://www.kystverket.no/kontakt-oss/los/' },
  { text: 'Kontakt farledsbevistjenesten', url: 'https://www.kystverket.no/kontakt-oss/farledsbevistjenesten/' },
  { text: 'Sjøtrafikksentralen', url: 'https://www.kystverket.no/kontakt-oss/sjotrafikksentralene/' },
  { text: 'Presse', url: 'https://www.kystverket.no/kontakt-oss/presse/' },
  { text: 'Arealplanlegging', url: 'https://www.kystverket.no/kontakt-oss/arealplan/' },
];

export type FooterProps = {
  language: SupportedLanguage;
  additionalLogo?: ReactNode;
  text?: string;
  copyright?: string;
  contacts?: LinkToSite[];
  links?: LinkToSite[] | LinkToSite[][];
};

function LinkList({ links }: { links: LinkToSite[] }) {
  if (!links || links.length === 0) {
    return null;
  }
  return (
    <div className={classes.linkList}>
      {links.map((link, index) => (
        <Link key={index} href={link.url} style={{ textDecoration: 'none' }} className={classes.link}>
          <Icon material="arrow_forward" aria-hidden className={classes.icon} />
          <span>{link.text}</span>
        </Link>
      ))}
    </div>
  );
}

export function Footer({
  language,
  additionalLogo,
  text = '',
  copyright = '',
  contacts = defaultContactLinks,
  links = [],
}: FooterProps) {
  const t = useTranslation(language);

  const currentYear = new Date().getFullYear();

  if (!copyright) {
    copyright = `Opphavsrett Kystverket © ${currentYear}`;
  }

  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerContentContainer}>
          <div className={classes.logoContainer}>
            <div className={classes.logoContainerInner}>
              <Logo alt={t('kystverket')} variant="white-horizontal" width={220} height={55.25} />
              {additionalLogo}
            </div>
            {!text && (
              <div className={classes.textContainer}>
                <span className={classes.copyrightText}>{copyright}</span>
              </div>
            )}
          </div>
          <div className={classes.linksAndContactsContainer}>
            <div className={classes.linksContainer}>
              {text && (
                <div className={classes.linkList}>
                  <span className={classes.extraText}>{text}</span>
                  <span className={classes.copyrightText}>{copyright}</span>
                </div>
              )}
              {links.map((linkGroup, index) => (
                <LinkList key={index} links={Array.isArray(linkGroup) ? linkGroup : [linkGroup]} />
              ))}
            </div>
            {contacts.length > 0 && (
              <Select
                aria-label={t('kontakt')}
                defaultValue=""
                className={classes.select}
                width="full"
                onChange={(e) => {
                  e.preventDefault();
                  window.location.href = e.target.value;
                }}
              >
                <Select.Option disabled value="" aria-hidden="true" hidden>
                  {t('kontakt')}
                </Select.Option>
                {contacts.map((link: LinkToSite, index: number) => (
                  <Select.Option key={index} value={link.url} className={classes.selectOption}>
                    {link.text}
                  </Select.Option>
                ))}
              </Select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
