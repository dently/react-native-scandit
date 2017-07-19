/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '@component/button';
import CenterView from '@container/centerView';
import Welcome from '@scene/welcome';
import Scanner from '@container/scanner';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory =>
    <CenterView>
      {getStory()}
    </CenterView>
  )
  .add('with text', () =>
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button Test</Text>
    </Button>
  )
  .add('with some emoji', () =>
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  );

storiesOf('Scanner', module).add('plain', () => <Scanner />);