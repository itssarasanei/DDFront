import { Autocomplete, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useEffect, useState } from 'react';

import { getProfessionApi } from '@/api/methods';
import { Professional } from '@/api/methods/models';
import { websiteUrls } from '@/constants/urls';

import { SearchInputProps } from './models';

export const SearchInput = ({ professions, isProfessionsPassed }: SearchInputProps) => {
  const [localProfessions, setLocalProfessions] = useState<Professional[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (isProfessionsPassed && professions?.length) {
      setLocalProfessions(professions);
    } else {
      getProfessionApi().then((response) => {
        setLocalProfessions(response.data);
      });
    }
  }, [professions]);

  const handleChange = (event: SyntheticEvent<Element, Event>, value: Professional | null) => {
    if (value) {
      router.push(`${websiteUrls.expertiseSearch}/${value.id}`);
    }
  };

  return (
    <Autocomplete
      options={localProfessions}
      getOptionLabel={(option) => option.title}
      getOptionKey={(option) => option.id}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label='جستجوی تخصص' color='secondary' />}
      fullWidth
    />
  );
};
