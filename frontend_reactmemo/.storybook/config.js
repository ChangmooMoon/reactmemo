import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered'
import backgrounds from '@storybook/addon-backgrounds'

addDecorator(centered)
addDecorator(
  backgrounds([
    {name: 'white', value: '#ffffff', default: true},
    {name: 'green', value: '#339933'},
    {name: 'black', value: '#000000'}
  ])
)

const req = require.context(
  '../src/components',
  true,
  /\.stories\.(js|jsx)$/,
)

function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  })
}

configure(loadStories, module);