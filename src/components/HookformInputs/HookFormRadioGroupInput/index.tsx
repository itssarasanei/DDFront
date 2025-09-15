import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

import { RadioGroupProps } from '@/components/RadioGroup/models';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';

export type HookRadioGroupInputProp = Omit<ControllerProps<any>, 'render'> &
  Omit<RadioGroupProps, 'onChange' | 'name' | 'defaultValue' | 'value'>;

const HookFormRadioGroupInput = ({ name, control, ...rest }: HookRadioGroupInputProp) => {
  return (
    <Controller
      name={name}
      control={control}
      // @ts-expect-error: ref
      render={(props) => <RadioGroup {...props} {...rest} />}
    />
  );
};

export default HookFormRadioGroupInput;
