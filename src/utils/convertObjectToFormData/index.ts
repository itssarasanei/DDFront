import { ObjectWithAnyKeyValue } from './models';

export const convertObjectToFormData = (object: ObjectWithAnyKeyValue) => {
  if (object) {
    const data = new FormData();
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        data.append(key, object[key]);
      }
    }
    return data;
  }
  return null;
};
