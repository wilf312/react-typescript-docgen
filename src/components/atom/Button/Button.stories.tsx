import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Button} from './Button';

const stories = storiesOf('Button', module);

stories.add(
  'default',
  () => <Button text={'text'} onClick={action('onclick')} type={'type'} />,
  { info: { inline: true } }
);
