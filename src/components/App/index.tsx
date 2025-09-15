'use client';

import { useEffect } from 'react';

import { useUserData } from '@/hooks/useUserData';

import { Header } from '../Header';
import classes from './index.module.scss';
import { AppProps } from './models';

export const App = ({ children }: AppProps) => {
  const { getUserData } = useUserData();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
    </>
  );
};
