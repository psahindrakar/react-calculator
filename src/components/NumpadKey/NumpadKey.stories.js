import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';

import NumpadKey from '.';

export const actions = {
    onClick: action('onClick')
};


storiesOf('NumpadKey', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)

    .add('Key 1', () => <NumpadKey value="1" {...actions}/>)
    .add('Key 2', () => <NumpadKey value="2" {...actions}/>)
    .add('Key +', () => <NumpadKey value="+" {...actions}/>)
