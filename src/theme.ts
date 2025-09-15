import { createTheme } from '@mui/material';

import { colorPalette } from './constants/colorPalette';

export const applicationTheme = () => {
  return createTheme({
    palette: {
      background: {
        default: colorPalette.background,
        paper: colorPalette.background
      },
      primary: {
        contrastText: colorPalette.foreground,
        main: colorPalette.main
      },
      secondary: {
        contrastText: colorPalette.foreground,
        main: colorPalette.secondary
      }
    },
    direction: 'rtl',
    typography: {
      allVariants: {
        color: colorPalette.foreground,
        fontFamily: '"Vazirmatn", sans-serif'
      }
    }
  });
};
