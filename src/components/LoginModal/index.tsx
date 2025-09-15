import { Favorite } from '@mui/icons-material';
import { Grid, TextField, Typography } from '@mui/material';
import { AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import { loginApi, registerApi } from '@/api/methods';
import { LoginApiResponse, User } from '@/api/methods/models';
import { colorPalette } from '@/constants/colorPalette';
import { websiteUrls } from '@/constants/urls';
import { useAppDispatch } from '@/store';
import { setUserData } from '@/store/slices/userDataSlice';

import { Modal } from '../Modal';
import { LoginModalProps } from './models';

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    const handleLoginSuccess = (response: AxiosResponse<LoginApiResponse>) => {
      localStorage.setItem('token', response.data.token);
      dispatch(setUserData(jwtDecode<User>(response.data.token)));
      router.push(websiteUrls.patientProfile);
      onClose();
    };
    const loginApiData = {
      password,
      username: phoneNumber
    };
    loginApi({
      data: loginApiData
    })
      .then((response) => {
        setIsLoading(false);
        handleLoginSuccess(response);
      })
      .catch(() => {
        const registerApiData = {
          firstName: '',
          lastName: '',
          gender: true,
          password,
          phoneNumber,
          username: phoneNumber,
          isDoctor: false
        };
        registerApi({
          data: registerApiData
        })
          .then(() =>
            loginApi({ data: loginApiData })
              .then(handleLoginSuccess)
              .finally(() => setIsLoading(false))
          )
          .catch(() => setIsLoading(false));
      });
  };

  const handleChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Modal
      onClose={onClose}
      maxWidth='sm'
      fullWidth
      isLoading={isLoading}
      submitButtonText='تایید'
      onSubmit={handleSubmit}
      submitButtonProps={{
        disabled: phoneNumber.slice(0, 2).toString() !== '09' || phoneNumber.length !== 11
      }}
      open={isOpen}
    >
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
      <Typography variant='h6'>ورود به حساب کاربری</Typography>
      <br />
      <Typography variant='caption'>
        برای استفاده از خدمات دکتردکتر، شماره موبایل خود را وارد کنید.
      </Typography>
      <br />
      <br />
      <TextField
        required
        label='شماره موبایل'
        placeholder='09*********'
        onChange={handleChangePhoneNumber}
      />
      <br />
      <br />
      <TextField required label='رمزعبور' placeholder='*********' onChange={handleChangePassword} />
    </Modal>
  );
};
