'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Divider, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { getUserInfoApi, updateUserInfo } from '@/api/methods';
import HookFormNumberInput from '@/components/HookformInputs/HookFormNumberInput';
import HookFormRadioGroupInput from '@/components/HookformInputs/HookFormRadioGroupInput';
import HookFormTextInput from '@/components/HookformInputs/HookFormTextInput';
import { Profile } from '@/components/Profile';
import { genders } from '@/constants/genders';
import {
  VALIDATION_MESSAGE_NATIONAL_ID,
  VALIDATION_MESSAGE_PERSIAN_CHARACTER,
  VALIDATION_MESSAGE_REQUIRED
} from '@/constants/messages/validationMessages';
import { PERSIAN_CHARACTER_REGEX } from '@/constants/validations';
import { useAppSelector } from '@/store';
import { nationalIdValidation as validateNationalId } from '@/utils/validations/nationalIdValidation';

import classes from './index.module.scss';

const patientInformationValidationSchema = yup.object().shape({
  nationalId: yup
    .string()
    .required(VALIDATION_MESSAGE_REQUIRED)
    .test('nationalId', VALIDATION_MESSAGE_NATIONAL_ID, validateNationalId),
  firstName: yup
    .string()
    .required(VALIDATION_MESSAGE_REQUIRED)
    .matches(PERSIAN_CHARACTER_REGEX, { message: VALIDATION_MESSAGE_PERSIAN_CHARACTER }),
  lastName: yup
    .string()
    .required(VALIDATION_MESSAGE_REQUIRED)
    .matches(PERSIAN_CHARACTER_REGEX, { message: VALIDATION_MESSAGE_PERSIAN_CHARACTER }),
  gender: yup.bool().required(VALIDATION_MESSAGE_REQUIRED),
  address: yup.string().required(VALIDATION_MESSAGE_REQUIRED),
  username: yup.string().required(VALIDATION_MESSAGE_REQUIRED)
});

const defaultValues = {
  firstName: '',
  lastName: '',
  gender: true,
  address: '',
  nationalId: '',
  username: ''
};

const PatientInformationPage = () => {
  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  const userData = useAppSelector((state) => state.userData);

  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(patientInformationValidationSchema)
  });

  useEffect(() => {
    if (userData.data.sub) {
      getUserInfoApi({ userId: userData.data.sub })
        .then((response) => {
          reset({
            username: response.data.username,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            gender: response.data.gender,
            address: response.data.address || '',
            nationalId: response.data.nationalId || ''
          });
        })
        .catch(() => undefined);
    }
  }, [userData?.data?.sub]);

  const handleSubmitForm = (values: typeof defaultValues) => {
    setIsLoading(true);
    updateUserInfo({ data: values })
      .then(() => {
        toast.success('اطلاعات کاربری شما با موفقیت تغییر کرد.');
      })
      .catch(() => undefined)
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Grid container spacing={4} direction={isSmallScreen ? 'column' : 'row'}>
      <Grid item xs={3}>
        <Profile />
      </Grid>
      <Grid item xs={9}>
        <Grid container alignItems='center' spacing={1}>
          <Grid item>
            <Person />
          </Grid>
          <Grid item>
            <Typography variant='h6'>اطلاعات کاربری</Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container spacing={4} marginTop={2}>
          <Grid item xs={6}>
            <HookFormTextInput
              InputProps={{
                className: classes.form_input
              }}
              name='firstName'
              label='نام'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <HookFormTextInput
              InputProps={{
                className: classes.form_input
              }}
              name='lastName'
              label='نام خانوادگی'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <HookFormNumberInput
              InputProps={{
                className: classes.form_input
              }}
              name='nationalId'
              label='کد ملی'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <HookFormRadioGroupInput
              control={control}
              name='gender'
              data={[...genders]}
              label='جنسیت'
              row
            />
          </Grid>
          <Grid item xs={12}>
            <HookFormTextInput
              InputProps={{
                className: classes.form_input
              }}
              name='address'
              label='آدرس'
              control={control}
              multiline
              rows={6}
            />
          </Grid>
          <Grid item xs textAlign='center'>
            <LoadingButton
              loading={isLoading}
              onClick={handleSubmit(handleSubmitForm)}
              variant='contained'
            >
              <Typography variant='button' color='white'>
                ثبت تغییرات
              </Typography>
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientInformationPage;
