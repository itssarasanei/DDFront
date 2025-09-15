export const formatNumberWithSeparator = (number: number | string) => {
  if (number !== 0 && number !== undefined && number !== null) {
    number = number.toString().replace(/,/g, '');
  }
  if (number !== null && !isNaN(number as number)) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
  return '-';
};
