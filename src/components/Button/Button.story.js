import React from 'react';

import Button from './Button.jsx';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('Primary', () => <Button priority="primary">I am a Button</Button>)
  .add('Secondary', () => <Button priority="secondary">I am a Button</Button>)
