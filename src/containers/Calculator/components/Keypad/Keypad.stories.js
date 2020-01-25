import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';

import Keypad from '.';

export const actions = {
    onClick: action('onClick')
};

storiesOf('Keypad', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)

    .add('Default', () => <Keypad keys="789=456/123*0.+-" {...actions}/>)