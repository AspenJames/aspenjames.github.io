import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { hot } from 'react-hot-loader';

import ContainerRight from '../components/ContainerRight';
import TextRight from '../components/TextRight';

function About() {
  return (
    <ContainerRight maxWidth='md'>
      <TextRight variant='h2' color='primary'>
        Nice to meet you!
      </TextRight>
      <TextRight variant='h5' component='p' color='textPrimary'>
        As a full stack engineer, I build web-based software products with a
        focus on the end user. I am especially interested in the scalability
        and maintainability of the software itself, ensuring the ability to
        iterate and respond quickly to changing requirements and demand. I
        value knowledge sharing, collaboration, and documentation as ways to
        grow individually as well as a team. I enjoy automation and developer
        tooling, simplifying repeated tasks and workflows.
      </TextRight>
    </ContainerRight>
  );
}

export default hot(module)(About);
