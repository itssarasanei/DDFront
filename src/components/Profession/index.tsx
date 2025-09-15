import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

import { websiteUrls } from '@/constants/urls';

import { ProfessionProps } from './models';

export const Profession = ({ profession }: ProfessionProps) => {
  return (
    <Grid marginTop={2} container alignItems='center' spacing={2}>
      <Grid item xs={8}>
        <Typography variant='h6'>{profession.title}</Typography>
        <Typography variant='caption'>{profession.description}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button variant='outlined'>
          <Link href={`${websiteUrls.expertiseSearch}/${profession.id}`}>
            <Typography variant='button'>مشاهده پزشکان</Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};
