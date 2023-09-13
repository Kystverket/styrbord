import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Kystverket Styrbord',
  brandUrl: 'https://kystverket.no',
  brandImage: 'https://kystverket.no/UI/Icons/logo.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#000667',
  colorSecondary: '#ff451f',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#000667',
  appBorderRadius: 0,

  // Text colors
  textColor: '#000667',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#000667',
  inputTextColor: '#000667',
  inputBorderRadius: 0,
});