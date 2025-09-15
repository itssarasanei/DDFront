import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Theme, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { Autoplay, FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Stars } from '../Header/components/Stars';
import classes from './index.module.scss';
import { TestimoniesProps } from './models';
import { Testimony } from './Testimony';

export const Testimonies = ({ quotes, title }: TestimoniesProps) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <Typography variant='h4' color='grey' align='center' component='h2' className='mb-16'>
        {title} از نگاه مشتریان
      </Typography>
      <Typography marginTop={3} variant='h6' color='darkgrey' align='center' component='p'>
        همیشه برای خواندن نظرات شما آماده‌ایم.
      </Typography>
      <div className={classes.slider_container}>
        <Swiper
          slidesPerView={isSmallScreen ? 1 : 3}
          spaceBetween={16}
          className={classes.swiper}
          freeMode
          mousewheel
          autoplay={false}
          keyboard={{
            enabled: true
          }}
          modules={[FreeMode, Pagination, Navigation, Keyboard, Mousewheel, Autoplay]}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={index}>
              <Testimony
                typographyProps={{
                  variant: 'subtitle1',
                  color: 'N700',
                  component: 'p'
                }}
                className={classes.testimony}
                ratingClassName={classes.rating}
                rating={
                  <Stars
                    width='21.02'
                    height='21'
                    className='d-inline-block my-8'
                    score={quote.rate}
                  />
                }
                cardHeader={quote.author}
                infoLabel={quote.infoLabel}
                imgNode={<Image src={quote.img} width={104} height={104} alt={quote.author} />}
              >
                <Typography variant='body2' color='N700'>
                  {quote.opinion}
                </Typography>
              </Testimony>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
