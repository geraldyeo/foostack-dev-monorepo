import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
  .addParameters({
    info: {
      disable: true,
    },
  })
  .add('to UIKit Playground', () => <div>Welcome</div>);
