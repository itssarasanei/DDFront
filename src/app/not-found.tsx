import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import classes from './not-found.module.scss';

const NotFound = () => {
  return (
    <main>
      <div className={classes.container}>
        <Image src='/images/404.svg' alt='404' width={350} height={350} />
        <Typography variant='h4'>صفحه مورد نظر یافت نشد</Typography>
        <Link href='/'>
          <Button className={classes.home_page_button} variant='contained'>
            <Typography color='white' variant='button'>
              بازگشت به صفحه اصلی
            </Typography>
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
