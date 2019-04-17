import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { baseTheme, Text } from '@foostack-dev/restyled';

const stories = storiesOf('Components/Typography/Text', module);
stories.addDecorator(withKnobs);

const label = 'Mode';
const options = {
  Light: 'light',
  Dark: 'dark',
};
const defaultValue = 'light';

stories
  .add('Default Text', () => {
    return <Text>Test</Text>;
  })
  .add('Primary Text', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return <Text variation="primary">Test</Text>;
  })
  .add('Body Text', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return <Text variation="body">Test</Text>;
  });
