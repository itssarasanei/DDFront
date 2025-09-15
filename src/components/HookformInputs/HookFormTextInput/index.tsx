import { TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { HookFormTextInputProps } from './models';
import TextFieldInput from './TextFieldInput';

const HookFormTextInput = <T extends FieldValues>({
  name,
  control,
  ...rest
}: TextFieldProps & HookFormTextInputProps & UseControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => <TextFieldInput {...props} {...rest} />}
    />
  );
};

export default HookFormTextInput;
