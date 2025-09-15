import { ObjectWithAnyKeyValue } from '../convertObjectToFormData/models';

export const formatStringByKey = (str: string, ...rest: ObjectWithAnyKeyValue[]) => {
  if (rest.length) {
    let key;
    const args = ['string', 'number'].includes(typeof rest[0])
      ? Array.prototype.slice.call(rest)
      : rest[0];

    for (key in args) {
      str = str.replace(new RegExp('\\{\\{' + key + '\\}\\}', 'gi'), args[key]);
    }
  }
  return str;
};
