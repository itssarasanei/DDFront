import { TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { HookFormNumberInputProps } from './models';
import NumberInput from './NumberInput';

const HookFormNumberInput = <T extends FieldValues>({
  name,
  control,
  ...rest
}: HookFormNumberInputProps & TextFieldProps & UseControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => <NumberInput {...props} {...rest} />}
    />
  );
};

export default HookFormNumberInput;
