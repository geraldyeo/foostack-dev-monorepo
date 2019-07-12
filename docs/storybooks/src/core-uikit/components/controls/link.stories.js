import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { baseTheme, Link } from '@foostack-dev/core-uikit';

const stories = storiesOf('Components/Controls/Link', module);
stories.addDecorator(withKnobs);

const label = 'Mode';
const options = {
  Light: 'light',
  Dark: 'dark',
};
const defaultValue = 'light';

stories
  .add('Default Link', () => {
    return <Link href="#">Link</Link>;
  })
  .add('Primary Link', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return (
      <Link variation="primary" href="#">
        Primary Link
      </Link>
    );
  })
  .add('Body Link', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return (
      <Link variation="body" href="#">
        Body Link
      </Link>
    );
  });
