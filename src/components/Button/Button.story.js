import React from 'react';

import Button from './Button.jsx';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('Default', () => <Button priority="primary">I am a Button</Button>)
