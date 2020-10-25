import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { hot } from 'react-hot-loader';

import ContainerRight from '../components/ContainerRight';
import LowerTextRight from '../components/LowerTextRight';

function About() {
  return (
    <ContainerRight maxWidth='sm'>
      <LowerTextRight variant='h3' component='h1' color='primary'>
        Nice to meet you!
      </LowerTextRight>
      <LowerTextRight variant='body1' color='textPrimary'>
        I am a web-focused software developer based in the Pacific Northwest. I
        value accessibility, equity, transparency, and automation.
      </LowerTextRight>
    </ContainerRight>
  );
}

export default hot(module)(About);