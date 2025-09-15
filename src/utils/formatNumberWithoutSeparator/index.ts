export const formatNumberWithoutSeparator = (input: number | string, separator: string) =>
  +input?.toString()?.replace(new RegExp(`\\${separator}`, 'gi'), '');
