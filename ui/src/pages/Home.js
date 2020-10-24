import React from 'react';
import { hot } from 'react-hot-loader';

import {
  Container,
  Typography
} from '@material-ui/core';

function Home() {
  return (
    <Container>
      <Typography variant="h1" color="primary" align="right">
        hello!
      </Typography>

      <Typography variant="h3" component="h2" color="secondary" align="right">
        my name is aspen.
      </Typography>
      <Typography variant="h3" color="textSecondary" align="right">
        i'm a developer.
      </Typography>
    </Container>
  );
}

export default hot(module)(Home);