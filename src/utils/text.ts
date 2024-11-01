export const capitalizeFirstLetter = (text?: string) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};
export const toLowerWithHyphens = (text?: string) => {
  if (!text) return '';
  return String(text)
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
};
