import React from 'react';
import { Provider } from '@foostack-dev/restyled';

const providerDecorator = storyFunc => (
  <Provider>
    <div>{storyFunc()}</div>
  </Provider>
);

export default providerDecorator;
