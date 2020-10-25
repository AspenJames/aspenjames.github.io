import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

export default function LowerTextRight(props) {
  const c = makeStyles(theme => ({
    lower: {
      textTransform: 'lower',
    },
  }))();
  return (
    <Typography align='right' classes={c.lower} {...props} />
  );
}