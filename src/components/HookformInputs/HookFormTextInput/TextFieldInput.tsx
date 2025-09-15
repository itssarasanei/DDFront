import { TextField } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

import { ClearInputButton } from '@/components/ClearInputButton';

const TextFieldInput = ({
  field: { onChange, value, ref },
  fieldState: { error },
  label,
  hasClearButton,
  required,
  type,
  ...rest
}: FieldValues) => {
  const handleClearValue = () => {
    onChange('');
  };

  return (
    <TextField
      required={required}
      type={type}
      inputRef={ref}
      fullWidth
      helperText={error ? error.message : null}
      error={!!error}
      onChange={onChange}
      value={value}
      label={label}
      InputProps={{
        endAdornment:
          hasClearButton && value ? <ClearInputButton onClick={handleClearValue} /> : null
      }}
      {...rest}
    />
  );
};

export default TextFieldInput;
