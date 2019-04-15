import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@foostack-dev/restyled';

const stories = storiesOf('Components/Controls', module);

stories.add('Button', () => {
  return <Button>Button</Button>;
});
