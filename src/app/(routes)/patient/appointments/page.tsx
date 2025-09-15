'use client';

import { Button, Divider, Grid, Tab, Tabs, Theme, Typography, useMediaQuery } from '@mui/material';
import jMoment from 'moment-jalaali';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

import { getCustomerVisitsService, getUserInfoApi } from '@/api/methods';
import { GetCustomerVisitsResponse } from '@/api/methods/models';
import FullPageLoading from '@/components/FullPageLoading';
import { Profile } from '@/components/Profile';
import { DATE_FORMAT_JALAALI_DASH_WITH_TIME } from '@/constants/dateFormats';
import { useAppSelector } from '@/store';
import { formatNumberWithSeparator } from '@/utils/formatNumberWithSeparator';

import classes from './index.module.scss';

const PatientAppointmentsPage = () => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const userData = useAppSelector((state) => state.userData);

  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [visits, setVisits] = useState<GetCustomerVisitsResponse>();

  const visitsPerTab = value === 0 ? visits?.onGoingVisits : visits?.lastVisits;

  useEffect(() => {
    getUserInfoApi({ userId: userData.data.sub })
      .then((response) => {
        getCustomerVisitsService({ customerId: response.data.id })
          .then((visitsResponse) => {
            setVisits(visitsResponse.data);
          })
          .catch(() => undefined)
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  if (isLoading) {
    return <FullPageLoading />;
  }

  return (
    <Grid container spacing={4} direction={isSmallScreen ? 'column' : 'row'}>
      <Grid item xs={3}>
        <Profile />
      </Grid>
      <Grid item xs={9}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label='نوبت های پیش رو' />
          <Tab label='نوبت های گذشته' />
        </Tabs>
        <Divider />
        <div className={classes.content_container}>
          {visitsPerTab?.length ? (
            visitsPerTab.map((visit) => (
              <Grid
                container
                key={visit.id}
                className={classes.visits_container}
                justifyContent='space-between'
                alignItems='center'
              >
                <Grid item>نام دکتر: {`${visit.doctorTitle} - ${visit.professional}`}</Grid>
                <Grid item>
                  زمان ویزیت: {jMoment(visit.startedAt).format(DATE_FORMAT_JALAALI_DASH_WITH_TIME)}
                </Grid>
                <Grid item>هزینه: {formatNumberWithSeparator(visit.price / 10)} تومان</Grid>
              </Grid>
            ))
          ) : (
            <Grid
              container
              flexDirection='column'
              alignItems='center'
              className={classes.not_found_container}
            >
              <Grid item>
                <Image
                  src='/images/appointmentNotFound.webp'
                  alt='نوبت یافت نشد'
                  width={225}
                  height={144}
                />
              </Grid>
              <Grid item>
                <Typography className={classes.body_text} variant='body1'>
                  هنوز نوبتی ثبت نشده است
                </Typography>
              </Grid>
              <Grid item>
                <Button className={classes.body_text} variant='contained'>
                  <Typography variant='button' color='white'>
                    یافتن پزشک
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default PatientAppointmentsPage;
