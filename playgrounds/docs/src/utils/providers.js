import React from 'react';
import { Provider } from '@foostackdev/restyled';

const providerDecorator = storyFunc => (
  <Provider>
    <div>{storyFunc()}</div>
  </Provider>
);

export default providerDecorator;
