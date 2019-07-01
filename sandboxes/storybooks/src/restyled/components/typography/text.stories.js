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
    return (
      <Text>
        Tofu thundercats aute, portland glossier brunch vinyl trust fund adaptogen literally
        reprehenderit nulla. VHS ex sustainable street art tumeric qui plaid single-origin coffee
        organic raclette magna. Gluten-free in laboris, tbh schlitz sartorial PBR&B chartreuse
        butcher hell of af sriracha chicharrones air plant gochujang. Williamsburg activated
        charcoal austin shoreditch, chillwave food truck aliqua iceland.
      </Text>
    );
  })
  .add('Primary Text', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return (
      <Text variation="primary">
        Tofu thundercats aute, portland glossier brunch vinyl trust fund adaptogen literally
        reprehenderit nulla. VHS ex sustainable street art tumeric qui plaid single-origin coffee
        organic raclette magna. Gluten-free in laboris, tbh schlitz sartorial PBR&B chartreuse
        butcher hell of af sriracha chicharrones air plant gochujang. Williamsburg activated
        charcoal austin shoreditch, chillwave food truck aliqua iceland.
      </Text>
    );
  })
  .add('Body Text', () => {
    baseTheme.variant = select(label, options, defaultValue);
    return (
      <Text variation="body">
        Tofu thundercats aute, portland glossier brunch vinyl trust fund adaptogen literally
        reprehenderit nulla. VHS ex sustainable street art tumeric qui plaid single-origin coffee
        organic raclette magna. Gluten-free in laboris, tbh schlitz sartorial PBR&B chartreuse
        butcher hell of af sriracha chicharrones air plant gochujang. Williamsburg activated
        charcoal austin shoreditch, chillwave food truck aliqua iceland.
      </Text>
    );
  });
