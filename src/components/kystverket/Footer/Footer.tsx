import { ReactNode } from 'react';
import classes from './Footer.module.css';
import { Logo, Body, Box, Link, Title } from '~/main';

export type TranslationFunction = (key: string) => string;

interface LinkToSite {
  text: string;
  url: string;
}

export interface FooterProps {
  t?: TranslationFunction;
  links?: LinkToSite[];
  children?: ReactNode;
}

export function Footer({
  t = (k) => {
    return k;
  },
  links = [],
  children,
}: FooterProps) {
  return (
    <Box color="navy" align="center" className={classes.footer}>
      <Box horizontal="screen-md" width="container" gap={64} justify="between" px={32} py={48}>
        <Box grow p={8} show="screen-md">
          <Logo alt={t('kystverket')} variant="white-vertical" width={220} />
        </Box>
        <Box grow gap={12}>
          <Title size="lg" level="3">
            {t('kystverket')}
          </Title>
          <Body size="lg">
            Postboks 1502, 6025 ÅLESUND
            <br />
            {t('sentralbord')}: 07847
            <br />
            post@kystverket.no
            <br />
            <br />
            {t('organisasjonsnummer')}: 874783242
            <br />© Kystverket
          </Body>
          <Box>
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.text}
              </Link>
            ))}
          </Box>
        </Box>
        {children && (
          <Box grow gap={12}>
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
}
