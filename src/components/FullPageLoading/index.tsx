import { CircularProgress } from '@mui/material';

import classes from './index.module.scss';

const FullPageLoading = () => {
  return (
    <div className={classes.loading_container}>
      <CircularProgress size={72} />
    </div>
  );
};

export default FullPageLoading;
