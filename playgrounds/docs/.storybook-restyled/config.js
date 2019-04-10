import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { light, dark } from '@stashaway/acorn/lib/design-system/themes/base';
import withProvider from '../src/utils/style-provider';

addDecorator(withInfo({}));
addDecorator(withThemesProvider([light, dark]));
addDecorator(withProvider);

addParameters({
  options: {
    enableShortcuts: true,
    name: 'Playground - Acorn',
    panelPosition: 'bottom',
    url:
      'https://gitlab.stashaway.com/dev/stashaway-web-app/tree/master/playgrounds/storybook/stories/acorn',
  },
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require('../src/stories/acorn/welcome');
  // automatically import all story js files that end with *.stories.js
  const required = require.context('../src/stories/acorn', true, /\.stories\.js$/);
  required.keys().forEach(filename => required(filename));
}

configure(loadStories, module);
