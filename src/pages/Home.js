import React from 'react';

import ContainerRight from '../components/ContainerRight';
import TextRight from '../components/TextRight';

function Home() {
  return (
    <ContainerRight maxWidth='md'>
      <TextRight variant="h1" color="primary">
        hello!
      </TextRight>

      <TextRight variant="h3" component="h2" color="secondary">
        my name is aspen.
      </TextRight>
      <TextRight variant="h3" color="textSecondary">
        i'm a developer.
      </TextRight>
    </ContainerRight>
  );
}

export default Home;
