import classes from './Footer.module.css';
import { Logo, Box, Link, Icon } from '~/main';
import { SupportedLanguage } from '~/utils/types';
import { useTranslation } from '~/i18n/translations';
import { Select } from '@digdir/designsystemet-react';

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

export interface FooterProps {
  language: SupportedLanguage;
  contactLinks?: LinkToSite[];
  links?: LinkToSite[];
  langLinks?: LinkToSite[];
}

export function Footer({ links = [], langLinks = [], language, contactLinks }: FooterProps) {
  const t = useTranslation(language);

  return (
    <Box color="navy" className={classes.footer} horizontal justify="center" px={32} py={48}>
      <Box horizontal="screen-md" width="container" gap={32} justify="between">
        <Box grow p={8} align="center" horizontal justify="center">
          <Logo alt={t('kystverket')} variant="white-horizontal" width={220} />
        </Box>

        <Box horizontal="screen-sm" gap={32}>
          <Box grow gap={24} justify="center">
            <Select
              defaultValue=""
              className={classes.select}
              width="full"
              style={{ color: 'red' }}
              onChange={(e) => {
                e.preventDefault();
                window.location.href = e.target.value;
              }}
            >
              <Select.Option disabled value="" className={classes.defaultSelectOption}>
                Kontakt oss
              </Select.Option>
              {contactLinks
                ? contactLinks.map((link: LinkToSite, index: number) => (
                    <Select.Option key={index} value={link.url} className={classes.selectOption}>
                      {link.text}
                    </Select.Option>
                  ))
                : defaultContactLinks.map((link: LinkToSite, index: number) => (
                    <Select.Option key={index} value={link.url} className={classes.selectOption}>
                      {link.text}
                    </Select.Option>
                  ))}
            </Select>
            © Kystverket
          </Box>
          <Box horizontal="screen-lg" gap={32}>
            <Box gap={8}>
              {links.map((link, index) => (
                <Link key={index} href={link.url} style={{ textDecoration: 'none' }} className={classes.link}>
                  <Icon material="arrow_right_alt" aria-hidden className={classes.icon} /> &nbsp;{link.text}
                </Link>
              ))}
            </Box>
            <Box gap={8}>
              {langLinks.map((link, index) => (
                <Link key={index} href={link.url} style={{ textDecoration: 'none' }} className={classes.link}>
                  <Icon material="arrow_right_alt" aria-hidden className={classes.icon} /> &nbsp;{link.text}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
