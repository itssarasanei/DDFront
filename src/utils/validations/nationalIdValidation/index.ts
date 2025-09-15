export const nationalIdValidation = (nationalId: string) => {
  if (nationalId) {
    const last = parseInt(nationalId[9], 10);
    const num =
      [0, 1, 2, 3, 4, 5, 6, 7, 8]
        .map((n) => {
          return parseInt(nationalId[n], 10) * (10 - n);
        })
        .reduce((nationalID, n) => {
          return nationalID + n;
        }) % 11;
    return (
      ((num < 2 && last === num) || (num >= 2 && last + num === 11)) && nationalId.length === 10
    );
  }
  return true;
};
