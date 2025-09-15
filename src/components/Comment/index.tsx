import { Star } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

import { CommentProps } from './models';

export const Comment = ({ comment }: CommentProps) => {
  return (
    <Card>
      <CardHeader title={comment.score} action={<Star color='warning' />} />
      <CardContent>
        <Typography>{comment.comment}</Typography>
      </CardContent>
    </Card>
  );
};
