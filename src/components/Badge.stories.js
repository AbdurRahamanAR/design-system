import React from 'react';
import { Badge } from './Badge';
import { Icon } from './Icon';

export default {
  title: 'Badge',
  component: Badge,
};

export const Basic = (args) => <Badge {...args}>Badge</Badge>;

export const All = () => (
  <div>
    <Badge type="primary">Primary</Badge>
    <Badge type="secondary">Secondary</Badge>
    <Badge type="success">Success</Badge>
    <Badge type="danger">Danger</Badge>
    <Badge type="warning">Warning</Badge>
    <Badge type="info">Info</Badge>
    <Badge type="light">Light</Badge>
    <Badge type="dark">Dark</Badge>
  </div>
);

export const Rounded = () => <Badge rounded>Rounded</Badge>;
