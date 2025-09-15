import { Button, Grid, Menu, Typography } from '@mui/material';
import Link from 'next/link';

import { websiteUrls } from '@/constants/urls';

import classes from './index.module.scss';
import { ProfessionsMenuProps } from './models';

export const ProfessionsMenu = ({
  anchorElement,
  isOpen,
  onClose,
  professions
}: ProfessionsMenuProps) => {
  return (
    <Menu
      PopoverClasses={{ paper: classes.root }}
      anchorEl={anchorElement}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      onClose={onClose}
    >
      <Grid padding={4} direction='row-reverse' container spacing={4}>
        {professions?.map((profession) => (
          <Grid item key={profession.id}>
            <Button onClick={onClose}>
              <Link href={`${websiteUrls.expertiseSearch}/${profession.id}`}>
                <Typography variant='button'>{profession.title}</Typography>
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Menu>
  );
};
