import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

export default function ContainerRight(props) {
  const c = makeStyles(theme => ({
    containerRight: {
      float: 'right',
    },
  }))();
  return (
    <Container className={c.containerRight} {...props} />
  )
}