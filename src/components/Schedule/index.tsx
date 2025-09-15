import { LoadingButton } from '@mui/lab';
import { Tooltip, Typography } from '@mui/material';
import jMoment from 'moment-jalaali';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { assignScheduleToCustomerApi, getUserInfoApi } from '@/api/methods';
import { colorPalette } from '@/constants/colorPalette';
import { DATE_FORMAT_JALAALI_DASH_WITH_TIME } from '@/constants/dateFormats';
import { useAppSelector } from '@/store';

import { ScheduleProps } from './models';

export const Schedule = ({ schedule }: ScheduleProps) => {
  const userData = useAppSelector((state) => state.userData);

  const [isLoading, setIsLoading] = useState(false);

  const jalaaliStartTime = jMoment(schedule.startedAt).format(DATE_FORMAT_JALAALI_DASH_WITH_TIME);

  const handleAssignScheduleToCustomer = () => {
    setIsLoading(true);
    getUserInfoApi({ userId: userData.data.sub })
      .then((response) => {
        assignScheduleToCustomerApi({ customerId: response.data.id, scheduleId: schedule.id })
          .then(() => {
            toast.success('نوبت برای شما با موفقیت رزرو شد.');
          })
          .catch(() => undefined)
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <Tooltip title={`مدت زمان: ${schedule.duration} دقیقه`}>
      <LoadingButton
        onClick={handleAssignScheduleToCustomer}
        variant='outlined'
        disabled={!schedule.isFree}
        loading={isLoading}
      >
        <Typography variant='button' color={isLoading ? 'grey' : colorPalette.main}>
          {jalaaliStartTime}
        </Typography>
      </LoadingButton>
    </Tooltip>
  );
};
