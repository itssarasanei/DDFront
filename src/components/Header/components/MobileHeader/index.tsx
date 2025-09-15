'use client';

import { Favorite, Menu, PersonOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import { MenuDrawer } from '@/components/MenuDrawer';
import { colorPalette } from '@/constants/colorPalette';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

import { MobileHeaderProps } from './models';

export const MobileHeader = ({ onOpenLoginModal, professions }: MobileHeaderProps) => {
  const userData = useAppSelector((state) => state.userData);

  const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawer = () => {
    setIsOpenMenuDrawer(true);
  };

  const handleCloseMenuDrawer = () => {
    setIsOpenMenuDrawer(false);
  };

  return (
    <>
      <MenuDrawer
        isOpen={isOpenMenuDrawer}
        onClose={handleCloseMenuDrawer}
        professions={professions}
      />
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          <IconButton onClick={handleOpenMenuDrawer} color='primary'>
            <Menu />
          </IconButton>
        </Grid>
        <Grid item>
          <Button startIcon={<Favorite color='error' />}>
            <Link href={websiteUrls.home}>
              <Typography color={colorPalette.main} variant='h4'>
                دکتردکتر
              </Typography>
            </Link>
          </Button>
        </Grid>
        <Grid item>
          {userData.data.sub ? (
            <Link href={websiteUrls.patientProfile}>
              <IconButton color='primary'>
                <PersonOutlined />
              </IconButton>
            </Link>
          ) : (
            <IconButton onClick={onOpenLoginModal} color='primary'>
              <PersonOutlined />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </>
  );
};
