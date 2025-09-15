import classes from './index.module.scss';
import { StarsProps } from './models';
import { Star } from './Star';

export const Stars = ({ width, height, score, className }: StarsProps) => {
  return (
    <div className={`${classes.stars} ${className}`}>
      <Star width={width} height={height} filled={score >= 5} halfFilled={score > 4 && score < 5} />
      <Star width={width} height={height} filled={score >= 4} halfFilled={score > 3 && score < 4} />
      <Star width={width} height={height} filled={score >= 3} halfFilled={score > 2 && score < 3} />
      <Star width={width} height={height} filled={score >= 2} halfFilled={score > 1 && score < 2} />
      <Star width={width} height={height} filled={score >= 1} halfFilled={score > 0 && score < 1} />
    </div>
  );
};
