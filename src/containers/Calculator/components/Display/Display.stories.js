import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';

import Display from '.';

storiesOf('Display', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)

    .add('Default', () => <Display expression="" result=""/>)
    .add('Addition', () => <Display expression="1+2" result="3"/>)
