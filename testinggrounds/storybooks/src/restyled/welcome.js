import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
  .addParameters({
    info: {
      disable: true,
    },
  })
  .add('to Restyled Playground', () => <div>Welcome</div>);
