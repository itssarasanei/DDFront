'use client';

import { Theme, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

import { getProfessionApi } from '@/api/methods';
import { Professional } from '@/api/methods/models';

import { LoginModal } from '../LoginModal';
import { DesktopHeader } from './components/DesktopHeader';
import { MobileHeader } from './components/MobileHeader';
import classes from './index.module.scss';

export const Header = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const [professions, setProfessions] = useState<Professional[]>([]);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  useEffect(() => {
    getProfessionApi().then((response) => {
      setProfessions(response.data);
    });
  }, []);

  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
  };

  if (typeof window !== 'undefined' && location.pathname.includes('sign-in')) {
    return null;
  }

  return (
    <div
      suppressHydrationWarning
      className={`${classes.root} ${isSmallScreen ? classes.rootMobile : ''}`}
    >
      <LoginModal isOpen={isOpenLoginModal} onClose={handleCloseLoginModal} />
      {isSmallScreen ? (
        <MobileHeader professions={professions} onOpenLoginModal={handleOpenLoginModal} />
      ) : (
        <DesktopHeader professions={professions} onOpenLoginModal={handleOpenLoginModal} />
      )}
    </div>
  );
};
