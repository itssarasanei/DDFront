import { DrawerProps } from '@mui/material';

export interface CustomDrawerProps extends DrawerProps {
  onClose: () => void;
}
