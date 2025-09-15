const validCharRegex = new RegExp('[A-Za-z\x30-\x39d$@$!%*#^().~`\'-_=+"?&]');
const persianNumberToEng: any = {
  '٠': '0',
  '۰': '0',
  '١': '1',
  '۱': '1',
  '٢': '2',
  '۲': '2',
  '٣': '3',
  '۳': '3',
  '٤': '4',
  '۴': '4',
  '٥': '5',
  '۵': '5',
  '٦': '6',
  '۶': '6',
  '٧': '7',
  '۷': '7',
  '٨': '8',
  '۸': '8',
  '٩': '9',
  '۹': '9'
};
export const convertPersianNumberToEnglish = (input: number | string) => {
  const number = input?.toString();
  if (number?.length) {
    const out = [];
    let valid = true;
    for (let i = 0; i < number.length; i++) {
      persianNumberToEng[number[i]]
        ? out.push(persianNumberToEng[number[i]])
        : validCharRegex.test(number[i])
          ? out.push(number[i])
          : (valid = false);
    }
    return { res: out.join(''), valid: valid };
  }
  return { valid: false };
};
