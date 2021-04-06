import React from 'react';
import {Check} from './index';

export default {
    title: 'components/Check',
    component: Check,
}

export const default_value = () => <Check/>;
export const initialized = () => <Check checked={true}/>;