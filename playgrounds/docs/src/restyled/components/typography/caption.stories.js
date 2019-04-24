import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { baseTheme, Caption } from '@foostack-dev/restyled';

const stories = storiesOf('Components/Typography/Caption', module);
stories.addDecorator(withKnobs);

const label = 'Mode';
const options = {
  Light: 'light',
  Dark: 'dark',
};
const defaultValue = 'light';

stories
  .add('Default Caption', () => {
    return <Caption>Caption</Caption>;
  })
  .add('Primary Caption', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return <Caption variation="primary">Caption</Caption>;
  });
