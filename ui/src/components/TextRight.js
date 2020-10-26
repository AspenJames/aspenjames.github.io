import React from 'react';

import { Typography, useMediaQuery } from '@material-ui/core';

export default function LowerTextRight({ variant, ...rest }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const mobileVariantMap = {
    'h1': 'h2',
    'h2': 'h3',
    'h3': 'h4',
    'h4': 'h5',
    'h5': 'h6',
  }
  const getVariant = val => {
    if (isMobile && Object.keys(mobileVariantMap).includes(val)) {
      return mobileVariantMap[val];
    }
    return val
  }

  return (
    <Typography align='right' variant={getVariant(variant)} {...rest} />
  );
}