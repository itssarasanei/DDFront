import { RadioGroupProps as MuRadioGroupProps } from '@mui/material';

interface RadioGroupDataProp {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface RadioGroupProps extends MuRadioGroupProps {
  /**
   * It is an array data to show group radio.
   */
  data: Array<RadioGroupDataProp>;
  /**
   * It shows value of the selected radio button.
   */
  value: string | number;
  /**
   * The direction of the group radios the value can be 'row' | 'column', default value is 'column'.
   */
  flexRedirection?: 'row' | 'column';
  /**
   * defines if user can change value or not.
   */
  isDisabled?: boolean;
  label?: string;
}
