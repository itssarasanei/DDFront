'use client';

import { CalendarTodayOutlined, Logout, PersonOutlined } from '@mui/icons-material';
import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { websiteUrls } from '@/constants/urls';
import { useAppDispatch } from '@/store';
import { resetUserData } from '@/store/slices/userDataSlice';

import classes from './index.module.scss';
import { ProfileProps } from './models';

export const Profile = ({ className }: ProfileProps) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(resetUserData());
    router.push(websiteUrls.home);
  };

  return (
    <Card className={`${classes.root} ${className}`}>
      <CardContent>
        <Grid container justifyContent='center'>
          <Image
            className={classes.profile_image}
            src='/images/profile.png'
            width={100}
            height={100}
            alt='پروفایل'
          />
        </Grid>
        <br />
        <Typography textAlign='center' variant='body2'>
          username
        </Typography>
        <br />
        <br />
        <br />
        <Button startIcon={<CalendarTodayOutlined />}>
          <Link href={websiteUrls.patientAppointments}>
            <Typography variant='button'>نوبت های من</Typography>
          </Link>
        </Button>
        <Divider className={classes.divider} />
        <Button startIcon={<PersonOutlined />}>
          <Link href={websiteUrls.patientInformation}>
            <Typography variant='button'>اطلاعات کاربری</Typography>
          </Link>
        </Button>
        <Divider className={classes.divider} />
        <Button color='error' startIcon={<Logout />} onClick={handleLogout}>
          <Typography color='error' variant='button'>
            خروج
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};
