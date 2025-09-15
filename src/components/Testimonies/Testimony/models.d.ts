import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export interface TestimonyProps {
  className?: string;
  cardHeader: string;
  imgNode: JSX.Element;
  children: ReactNode;
  typographyProps?: TypographyProps;
  rating: ReactNode;
  cardHeaderClassName?: string;
  ratingClassName?: string;
  childrenClassName?: string;
  infoLabel?: string;
}
