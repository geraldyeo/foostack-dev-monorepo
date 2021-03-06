import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { baseTheme, Heading } from '@foostack-dev/core-uikit';

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
  })
  .add('Default Headings h1 - h6', () => {
    return (
      <>
        <Heading as="h1">
          H1: Helvetica air plant retro, heirloom blue bottle hella banjo pinterest cloud bread.
        </Heading>
        <Heading as="h2">
          H2: Helvetica air plant retro, heirloom blue bottle hella banjo pinterest cloud bread.
        </Heading>
        <Heading as="h3">
          H3: Helvetica air plant retro, heirloom blue bottle hella banjo pinterest cloud bread.
        </Heading>
        <Heading as="h4">
          H4: Helvetica air plant retro, heirloom blue bottle hella banjo pinterest cloud bread.
        </Heading>
        <Heading as="h5">
          H5: Helvetica air plant retro, heirloom blue bottle hella banjo pinterest cloud bread.
        </Heading>
        <Heading as="h6">
          H6: Helvetica air plant retro, heirloom blue bottle hella banjo pinterest cloud bread.
        </Heading>
      </>
    );
  });
