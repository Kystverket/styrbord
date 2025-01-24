const iconIdList = [
  'chevron_right',
  'chevron_left',
  'delete',
  'content_copy',
  'edit',
  'close',
  'lock',
  'info',
  'warning',
  'error',
  'check',
  'check_circle',
  'radio_button_unchecked',
  'radio_button_checked',
] as const;
export type IconId = (typeof iconIdList)[number];
