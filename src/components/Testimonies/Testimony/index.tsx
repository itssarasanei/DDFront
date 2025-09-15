import { Chip, Typography } from '@mui/material';

import classes from './index.module.scss';
import { TestimonyProps } from './models';

export const Testimony = ({
  className = '',
  cardHeader,
  imgNode,
  children,
  typographyProps,
  rating,
  cardHeaderClassName = '',
  ratingClassName = '',
  childrenClassName = '',
  infoLabel
}: TestimonyProps) => {
  return (
    <div className={`${classes.root} ${className}`}>
      <div className={`${classes.card_header} ${cardHeaderClassName}`}>
        {imgNode}
        <div className={ratingClassName}>
          <Typography {...typographyProps} noWrap>
            {cardHeader}
          </Typography>
          {rating}
          {infoLabel && (
            <Chip
              color='primary'
              variant='outlined'
              label={infoLabel}
              className={classes.infoLabel}
              size='small'
            />
          )}
        </div>
      </div>

      {children ? (
        <div className={`${childrenClassName} ${classes.card_children}`}>{children}</div>
      ) : null}
    </div>
  );
};
