import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { baseTheme, Heading } from '@foostack-dev/restyled';

const stories = storiesOf('Components/Typography/Heading', module);
stories.addDecorator(withKnobs);

const label = 'Mode';
const options = {
  Light: 'light',
  Dark: 'dark',
};
const defaultValue = 'light';

stories
  .add('Default Heading', () => {
    return <Heading>Test</Heading>;
  })
  .add('Primary Heading', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return <Heading variation="primary">Test</Heading>;
  });
