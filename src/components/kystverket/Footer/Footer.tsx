import { ReactNode } from 'react';
import classes from './Footer.module.css';
import { Logo, Box, Link, Select, Icon } from '~/main';
import { SupportedLanguage } from '~/utils/types';
import { useTranslation } from '~/i18n/translations';

interface LinkToSite {
  text: string;
  url: string;
}

export interface FooterProps {
  language: SupportedLanguage;
  contactLinks?: LinkToSite[];
  links?: LinkToSite[];
  langLinks?: LinkToSite[];
}

export function Footer({ links = [], langLinks = [], contactLinks = [], language }: FooterProps) {
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
              className={classes.select}
              width="full"
              style={{ color: 'red' }}
              onChange={(e) => {
                e.preventDefault();
                window.location.href = e.target.value;
              }}
            >
              <Select.Option disabled>Kontakt oss</Select.Option>
              {contactLinks.map((link, index) => (
                <Select.Option key={index} value={link.url}>
                  <div style={{ color: 'red' }}>{link.text}</div>
                </Select.Option>
              ))}
            </Select>
            © Kystverket
          </Box>
          <Box horizontal="screen-lg" gap={32}>
            <Box>
              {links.map((link, index) => (
                <Link key={index} href={link.url} style={{ textDecoration: 'none' }} className={classes.link}>
                  <Icon material="arrow_right_alt" aria-hidden className={classes.icon} /> &nbsp;{link.text}
                </Link>
              ))}
            </Box>
            <Box>
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
