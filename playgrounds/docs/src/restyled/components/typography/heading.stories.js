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
  .add('Headings h1 - h6', () => {
    baseTheme.variant = select(label, options, defaultValue);
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
