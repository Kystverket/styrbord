import { SupportedLanguage } from '~/utils/types';
import classes from './Header.module.css';
import { Box, Label, Logo } from '~/main';

export interface HeaderProps {
  language: SupportedLanguage;
  logo: {
    title: string;
    url: string;
  };
}

export function Header({ logo: title }: HeaderProps) {
  return (
    <Box horizontal justify="center" align="center" className={classes.headerContainer}>
      <Box horizontal justify="between" align="center" px={16} width="container">
        <Box horizontal align="center" gap={16}>
          <a className={classes.logoLink} href={title.url}>
            <Logo />
            <Label className={classes.titleText} size="lg">
              {title.title}
            </Label>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
