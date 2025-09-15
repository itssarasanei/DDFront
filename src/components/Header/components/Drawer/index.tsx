import { Drawer as MuiDrawer } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { CustomDrawerProps } from './models';

export const Drawer = ({ onClose, ...props }: CustomDrawerProps) => {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return <MuiDrawer onClose={onClose} {...props} />;
};
