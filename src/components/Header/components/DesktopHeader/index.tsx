'use client';

import { Favorite, PersonOutlined } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import { ProfessionsMenu } from '@/components/ProfessionsMenu';
import { SearchInput } from '@/components/SearchInput';
import { colorPalette } from '@/constants/colorPalette';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

import classes from './index.module.scss';
import { DesktopHeaderProps } from './models';

export const DesktopHeader = ({ onOpenLoginModal, professions }: DesktopHeaderProps) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const userData = useAppSelector((state) => state.userData);

  const handleOpenProfessionsMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseProfessionsMenu = () => {
    setAnchorElement(null);
  };

  return (
    <div suppressHydrationWarning>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Button startIcon={<Favorite color='error' />}>
            <Link href={websiteUrls.home}>
              <Typography color={colorPalette.main} variant='h4'>
                دکتردکتر
              </Typography>
            </Link>
          </Button>
        </Grid>

        {typeof window !== 'undefined' && location.pathname !== websiteUrls.home && (
          <Grid item xs={5}>
            <SearchInput professions={professions} />
          </Grid>
        )}

        {userData.data.sub ? (
          <Grid item>
            <Link href={websiteUrls.patientProfile}>
              <Button startIcon={<PersonOutlined />} variant='outlined'>
                <Typography color={colorPalette.main} variant='button'>
                  {userData.data.sub}
                </Typography>
              </Button>
            </Link>
          </Grid>
        ) : (
          <Grid item>
            <Button onClick={onOpenLoginModal} startIcon={<PersonOutlined />} variant='outlined'>
              <Typography color={colorPalette.main} variant='button'>
                ورود
              </Typography>
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid container justifyContent='space-between' alignItems='center' className={classes.navbar}>
        <Grid item>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <Link href={websiteUrls.expertiseSearch}>
                <Typography variant='body2'>نوبت دهی</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Button onClick={handleOpenProfessionsMenu}>
                <Typography variant='body2'>تخصص ها</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Link href={websiteUrls.drLogin}>
            <Typography variant='body2' color={colorPalette.secondary}>
              برای پزشکان
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <ProfessionsMenu
        professions={professions || []}
        onClose={handleCloseProfessionsMenu}
        isOpen={Boolean(anchorElement)}
        anchorElement={anchorElement}
      />
    </div>
  );
};
