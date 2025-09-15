export const MALE_GENDER_ID = 'true';
export const FEMALE_GENDER_ID = 'false';

export const MALE_GENDER_TITLE = 'مرد';
export const FEMALE_GENDER_TITLE = 'زن';

export const male = {
  value: MALE_GENDER_ID,
  label: MALE_GENDER_TITLE
} as const;

export const female = {
  value: FEMALE_GENDER_ID,
  label: FEMALE_GENDER_TITLE
} as const;

export const genders = [male, female] as const;
