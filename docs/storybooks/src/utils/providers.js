import React from 'react';
import { Provider, Box, GlobalStyles } from '@foostack-dev/core-uikit';

const providerDecorator = storyFunc => (
  <Provider>
    <Box p={2}>
      <GlobalStyles />
      {storyFunc()}
    </Box>
  </Provider>
);

export default providerDecorator;
