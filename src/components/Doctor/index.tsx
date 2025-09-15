'use client';

import { Home, MonetizationOn, Phone, Star } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getDoctorRatesApi } from '@/api/methods';
import { websiteUrls } from '@/constants/urls';
import { formatNumberWithSeparator } from '@/utils/formatNumberWithSeparator';

import classes from './index.module.scss';
import { DoctorProps } from './models';

export const Doctor = ({ doctor, professionId, hasActions }: DoctorProps) => {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    getDoctorRatesApi({ doctorId: doctor.id })
      .then((response) => {
        setRate(response.data.averageScore);
      })
      .catch(() => undefined);
  }, []);

  return (
    <Card elevation={4} className={classes.root}>
      <CardHeader
        title={doctor.title}
        subheader={doctor.city}
        action={
          <Grid container spacing={1} alignItems='center'>
            <Grid item>
              <Star color='warning' />
            </Grid>
            <Grid item>
              <Typography variant='body2'>{rate}</Typography>
            </Grid>
          </Grid>
        }
      />
      <Divider />
      <CardContent>
        <Typography marginTop={1} variant='subtitle1'>
          {doctor.description}
        </Typography>
        <Grid marginTop={1} spacing={1} container alignItems='center'>
          <Grid item>
            <Home />
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'> {doctor.officeAddress}</Typography>
          </Grid>
        </Grid>
        <Grid marginTop={1} spacing={1} container alignItems='center'>
          <Grid item>
            <Phone />
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'> {doctor.officePhoneNumber}</Typography>
          </Grid>
        </Grid>
        <Typography marginTop={1} variant='subtitle1'>
          {doctor.visitRules}
        </Typography>
        <Grid marginTop={1} spacing={1} container alignItems='center'>
          <Grid item>
            <MonetizationOn />
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>
              {formatNumberWithSeparator(doctor.visitFee)} تومان
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {hasActions && (
        <CardActions>
          <Button variant='contained'>
            <Link
              href={{
                pathname: `/${websiteUrls.schedule}`,
                query: {
                  doctorId: doctor.id,
                  type: professionId
                }
              }}
            >
              <Typography variant='button' color='white'>
                ثبت نوبت
              </Typography>
            </Link>
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
