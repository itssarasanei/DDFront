'use client';

import { Grid, Typography } from '@mui/material';

import FullPageLoading from '@/components/FullPageLoading';
import { SearchInput } from '@/components/SearchInput';
import { Testimonies } from '@/components/Testimonies';
import { colorPalette } from '@/constants/colorPalette';
import { quotes } from '@/constants/quotes';
import { useAppSelector } from '@/store';

const HomePage = () => {
  const userData = useAppSelector((state) => state.userData);

  if (userData.isLoading) {
    return <FullPageLoading />;
  }

  return (
    <>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item>
          <Typography variant='h4' component='span'>
            بیش از{' '}
          </Typography>
          <Typography variant='h4' color={colorPalette.main} component='span'>
            {' '}
            ۱۷,۰۰۰{' '}
          </Typography>
          <Typography variant='h4' component='span'>
            پزشک متخصص در
          </Typography>
          <Typography variant='h4' color={colorPalette.main} component='span'>
            {' '}
            دکتر‌دکتر{' '}
          </Typography>
          <Typography variant='h4' component='span'>
            کنار شما هستند
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <SearchInput />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Testimonies title='دکتر‌دکتر' quotes={quotes} />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
