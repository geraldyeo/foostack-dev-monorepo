import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { baseTheme, Quote } from '@foostack-dev/restyled';

const stories = storiesOf('Components/Typography/Quote', module);
stories.addDecorator(withKnobs);

const label = 'Mode';
const options = {
  Light: 'light',
  Dark: 'dark',
};
const defaultValue = 'light';

stories
  .add('Default Quote', () => {
    return <Quote>Test</Quote>;
  })
  .add('Primary Quote', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return <Quote variation="primary">Test</Quote>;
  });
