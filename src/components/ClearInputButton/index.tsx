import { Close } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import React from 'react';

import { ClearInputButtonProps } from './models';

export const ClearInputButton = ({ onClick }: ClearInputButtonProps) => {
  return (
    <InputAdornment position='end'>
      <IconButton onClick={onClick} edge='end'>
        {<Close />}
      </IconButton>
    </InputAdornment>
  );
};
