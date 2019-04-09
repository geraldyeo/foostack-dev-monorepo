import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withProvider from '../src/utils/providers';

addDecorator(withInfo({}));
addDecorator(withProvider);

addParameters({
  options: {
    enableShortcuts: true,
    name: 'Playground - Restyled',
    panelPosition: 'bottom',
    url: 'https://github.com/geraldyeo/foostack-dev-monorepo',
  },
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require('../src/restyled/welcome');
  // automatically import all story js files that end with *.stories.js
  const required = require.context('../src/restyled', true, /\.stories\.js$/);
  required.keys().forEach(filename => required(filename));
}

configure(loadStories, module);
