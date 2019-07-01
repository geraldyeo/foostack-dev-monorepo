import React from 'react';
import { Provider, Box, GlobalStyles } from '@foostack-dev/restyled';

const providerDecorator = storyFunc => (
  <Provider>
    <Box p={2}>
      <GlobalStyles />
      {storyFunc()}
    </Box>
  </Provider>
);

export default providerDecorator;
