import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuRadioGroup,
  Typography
} from '@mui/material';
import React from 'react';

import { RadioGroupProps } from './models';

export const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    { onChange, data, name, value, flexRedirection = 'column', isDisabled, label, ...restProps },
    ref
  ) => {
    return (
      <>
        <FormLabel>{label}</FormLabel>
        <MuRadioGroup
          row={flexRedirection === 'row'}
          aria-label={name}
          name={name}
          value={value}
          {...restProps}
          ref={ref}
          onChange={onChange}
        >
          {data.map((item, index) => (
            <FormControlLabel
              labelPlacement='end'
              key={index}
              value={item.value}
              label={
                <Typography variant='caption' color='black'>
                  {item.label}
                </Typography>
              }
              disabled={item.disabled}
              control={<Radio disabled={isDisabled} />}
            />
          ))}
        </MuRadioGroup>
      </>
    );
  }
);
