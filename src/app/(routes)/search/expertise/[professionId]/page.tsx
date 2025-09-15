'use client';

import { Grid, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getDoctorsByProfessionIdApi } from '@/api/methods';
import { DoctorType } from '@/api/methods/models';
import { Doctor } from '@/components/Doctor';

const SearchDoctorPage = () => {
  const params = useParams();
  const [doctors, setDoctors] = useState<DoctorType[]>([]);

  const professionId = Number(params.professionId);

  useEffect(() => {
    getDoctorsByProfessionIdApi({ professionId }).then((response) => {
      setDoctors(response.data.doctors);
    });
  }, []);

  return (
    <>
      <Typography variant='h6'>دکتر‌دکتر - لیست تخصص های پزشکی فعال</Typography>
      <Grid marginTop={8} container spacing={2}>
        {doctors.map((doctor) => (
          <Grid item xs={12} md={4} key={doctor.id}>
            <Doctor doctor={doctor} professionId={professionId} hasActions />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SearchDoctorPage;
