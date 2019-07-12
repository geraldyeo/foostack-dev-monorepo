import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { baseTheme, Button } from '@foostack-dev/core-uikit';

const stories = storiesOf('Components/Controls/Button', module);
stories.addDecorator(withKnobs);

const label = 'Mode';
const options = {
  Light: 'light',
  Dark: 'dark',
};
const defaultValue = 'light';

stories
  .add('Default Button', () => {
    return (
      <>
        <Button>Button</Button>
        <p>Disabled</p>
        <Button disabled>Button</Button>
      </>
    );
  })
  .add('Primary Button', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return (
      <>
        <Button variation="primary">Primary Button</Button>
        <p>Disabled</p>
        <Button variation="primary" disabled>
          Primary Button
        </Button>
      </>
    );
  });
