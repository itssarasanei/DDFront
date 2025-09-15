'use client';

import { Divider, Grid, Typography } from '@mui/material';
import jMoment from 'moment-jalaali';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  getDoctorRatesApi,
  getDoctorsByProfessionIdApi,
  getDoctorSchedulesApi
} from '@/api/methods';
import { DoctorType, Rate, ScheduleType } from '@/api/methods/models';
import { Comment } from '@/components/Comment';
import { Doctor } from '@/components/Doctor';
import FullPageLoading from '@/components/FullPageLoading';
import { Schedule } from '@/components/Schedule';
import { DATE_FORMAT_MILADI_DASH } from '@/constants/dateFormats';

import classes from './index.module.scss';

const SchedulePage = () => {
  const searchParams = useSearchParams();
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);
  const [comments, setComments] = useState<Rate[]>([]);
  const [doctor, setDoctor] = useState<DoctorType>();
  const [isLoading, setIsLoading] = useState(true);

  const doctorId = Number(searchParams.get('doctorId'));
  const type = Number(searchParams.get('type'));

  useEffect(() => {
    const now = jMoment().format(DATE_FORMAT_MILADI_DASH);

    Promise.all([
      getDoctorRatesApi({ doctorId }),
      getDoctorsByProfessionIdApi({ professionId: type }),
      getDoctorSchedulesApi({ doctorId, params: { from: now } })
    ])
      .then((responses) => {
        setComments(responses[0].data.rates);
        setDoctor(responses[1].data.doctors.find((doctor) => doctor.id === doctorId));
        setSchedules(responses[2].data || []);
      })
      .catch(() => undefined)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FullPageLoading />;
  }

  return (
    <>
      {doctor && <Doctor doctor={doctor} />}
      <Typography variant='h4' marginTop={4}>
        نظرات کاربران
      </Typography>
      <Grid container spacing={2} marginTop={2}>
        {comments.map((comment) => (
          <Grid item key={comment.id}>
            <Comment comment={comment} />
          </Grid>
        ))}
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant='h4'>رزرو وقت</Typography>
      <Grid container spacing={2} marginTop={2} marginBottom={6}>
        {schedules.map((schedule) => (
          <Grid item key={schedule.id}>
            <Schedule schedule={schedule} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SchedulePage;
