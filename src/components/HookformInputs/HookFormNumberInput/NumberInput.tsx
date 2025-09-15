import { TextField } from '@mui/material';
import React, { ChangeEvent, useMemo } from 'react';
import { FieldValues } from 'react-hook-form';

import { convertPersianNumberToEnglish } from '@/utils/convertPersianNumberToEnglish';
import { formatNumberWithoutSeparator } from '@/utils/formatNumberWithoutSeparator';
import { formatNumberWithSeparator } from '@/utils/formatNumberWithSeparator';

const NumberInput = ({
  field: { onChange, value, ref },
  fieldState: { error },
  commafyValue,
  required,
  ...rest
}: FieldValues) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();

    const modifiedValue = convertPersianNumberToEnglish(event.target.value).res as string;

    const incomingValue =
      modifiedValue && commafyValue && !['0', ''].includes(modifiedValue)
        ? formatNumberWithoutSeparator(modifiedValue, ',')
        : modifiedValue;

    onChange(incomingValue);
  };

  const getValue = useMemo(() => {
    return commafyValue && value !== null && value !== undefined
      ? formatNumberWithSeparator(value)
      : value;
  }, [value, commafyValue]);

  return (
    <TextField
      required={required}
      inputRef={ref}
      helperText={error ? error.message : null}
      error={!!error}
      onChange={handleChange}
      value={getValue}
      fullWidth
      {...rest}
    />
  );
};

export default NumberInput;
