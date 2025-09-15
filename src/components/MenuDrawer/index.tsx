import { Close, ExpandMore, Favorite, PersonOutlined } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import { colorPalette } from '@/constants/colorPalette';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

import { Drawer } from '../Header/components/Drawer';
import { LoginModal } from '../LoginModal';
import classes from './index.module.scss';
import { MenuDrawerProps } from './models';

export const MenuDrawer = ({ isOpen, onClose, professions }: MenuDrawerProps) => {
  const userData = useAppSelector((state) => state.userData);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
  };

  return (
    <>
      <LoginModal isOpen={isOpenLoginModal} onClose={handleCloseLoginModal} />
      <Drawer dir='rtl' open={isOpen} onClose={onClose}>
        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={8}>
              <Button startIcon={<Favorite color='error' />}>
                <Link href={websiteUrls.home}>
                  <Typography color={colorPalette.main} variant='h4'>
                    دکتردکتر
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={onClose}>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
          {userData.data.sub ? (
            <Link href={websiteUrls.patientProfile}>
              <Button
                className={classes.login_button}
                fullWidth
                variant='outlined'
                startIcon={<PersonOutlined />}
              >
                <Typography variant='button' color={colorPalette.main}>
                  {userData.data.sub}
                </Typography>
              </Button>
            </Link>
          ) : (
            <Button
              className={classes.login_button}
              fullWidth
              variant='outlined'
              startIcon={<PersonOutlined />}
              onClick={handleOpenLoginModal}
            >
              <Typography variant='button' color={colorPalette.main}>
                ورود / عضویت
              </Typography>
            </Button>
          )}
          <div className={classes.navigation_items_container}>
            <Link href={websiteUrls.expertiseSearch}>
              <Typography variant='body2'>نوبت دهی</Typography>
            </Link>
            <Divider className={classes.divider} />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant='body2'>تخصص ها</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1} direction='column'>
                  {professions?.map((profession) => (
                    <Grid item key={profession.id}>
                      <Link href={`${websiteUrls.expertiseSearch}/${profession.id}`}>
                        <Typography variant='caption'>{profession.title}</Typography>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Divider className={classes.divider} />
            <Link href={websiteUrls.drLogin}>
              <Typography variant='body2' color={colorPalette.secondary}>
                برای پزشکان
              </Typography>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};
