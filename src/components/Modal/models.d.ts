import { ButtonProps, DialogProps } from '@mui/material';
import { FormEvent, ReactNode } from 'react';

export interface ModalProps extends DialogProps {
  title?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  onClose: () => void;
  submitButtonProps?: ButtonProps;
  submitButtonText: string;
  isLoading?: boolean;
}
