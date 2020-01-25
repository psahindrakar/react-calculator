import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import NumpadKey from '.';

storiesOf('NumpadKey', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)

    .add('default', () => <NumpadKey />)
