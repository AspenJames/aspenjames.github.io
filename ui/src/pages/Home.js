import React from 'react';
import { hot } from 'react-hot-loader';

import ContainerRight from '../components/ContainerRight';
import LowerTextRight from '../components/LowerTextRight';

function Home() {
  return (
    <ContainerRight maxWidth='sm'>
      <LowerTextRight variant="h1" color="primary">
        hello!
      </LowerTextRight>

      <LowerTextRight variant="h3" component="h2" color="secondary">
        my name is aspen.
      </LowerTextRight>
      <LowerTextRight variant="h3" color="textSecondary">
        i'm a developer.
      </LowerTextRight>
    </ContainerRight>
  );
}

export default hot(module)(Home);