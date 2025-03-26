import classes from './Footer.module.css';
import { Logo, Link, Icon } from '~/main';
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
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerLogo}>
          <Logo alt={t('kystverket')} variant="white-horizontal" width={220} height={55.25} />
        </div>
        <div className={classes.footerContent}>
          <div className={classes.footerSelect}>
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
              <Select.Option disabled value="" className={classes.defaultSelectOption} aria-hidden="true" hidden>
                {t('kontakt')}
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
          </div>
          <div className={classes.footerLinks}>
            <div className={classes.links}>
              {links.map((link, index) => (
                <Link key={index} href={link.url} style={{ textDecoration: 'none' }} className={classes.link}>
                  <Icon material="arrow_right_alt" aria-hidden className={classes.icon} /> &nbsp;{link.text}
                </Link>
              ))}
            </div>
            <div className={classes.links}>
              {langLinks.map((link, index) => (
                <Link key={index} href={link.url} style={{ textDecoration: 'none' }} className={classes.link}>
                  <Icon material="arrow_right_alt" aria-hidden className={classes.icon} /> &nbsp;{link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
