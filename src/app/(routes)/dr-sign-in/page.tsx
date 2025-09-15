'use client';

import { Favorite } from '@mui/icons-material';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { colorPalette } from '@/constants/colorPalette';

import classes from './index.module.scss';

const DrLoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {};

  const handleChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <Card elevation={4} className={classes.root}>
      <CardContent>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item>
            <Favorite color='error' />
          </Grid>
          <Grid item>
            <Typography color={colorPalette.main} variant='h4'>
              دکتردکتر
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Typography variant='h6' textAlign='center'>
          ورود به پنل
        </Typography>
        <br />
        <Typography variant='body2' textAlign='center'>
          برای ورود شماره موبایل خود را وارد کنید
        </Typography>
        <br />
        <br />
        <TextField
          required
          label='شماره موبایل'
          placeholder='مثلا 09123456789'
          onChange={handleChangePhoneNumber}
          fullWidth
        />
        <br />
        <br />
        <Button
          disabled={phoneNumber.slice(0, 2).toString() !== '09' || phoneNumber.length !== 11}
          fullWidth
          variant='contained'
          onSubmit={handleSubmit}
        >
          <Typography color='white' variant='button'>
            مرحله بعدی
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DrLoginPage;
