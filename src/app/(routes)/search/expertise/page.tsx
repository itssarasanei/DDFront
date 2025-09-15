'use client';

import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { getProfessionApi } from '@/api/methods';
import { Professional } from '@/api/methods/models';
import { Profession } from '@/components/Profession';

const SearchExpertisePage = () => {
  const [professions, setProfessions] = useState<Professional[]>([]);

  useEffect(() => {
    getProfessionApi().then((response) => {
      setProfessions(response.data);
    });
  }, []);

  return (
    <>
      <Typography variant='h6'>دکتر‌دکتر - لیست تخصص های پزشکی فعال</Typography>
      {professions?.map((profession) => <Profession profession={profession} key={profession.id} />)}
    </>
  );
};

export default SearchExpertisePage;
