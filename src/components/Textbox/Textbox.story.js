import React from 'react';

import Textbox from './Textbox.jsx';
import { storiesOf } from '@storybook/react';

storiesOf('Textbox', module)
  .add('with text', () => <Textbox />)
