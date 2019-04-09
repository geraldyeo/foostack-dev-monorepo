import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@foostackdev/restyled';

const stories = storiesOf('Components/Controls', module);

stories.add('Button', () => {
  return <Button>Button</Button>;
});
