import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'Label' };

export const All = () => (
  <div style={{ display: 'flex', width: '80%', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="warning">Warning</Button>
    <Button type="info">Info</Button>
    <Button type="light">Light</Button>
    <Button type="dark">Dark</Button>
    <Button type="link">Link</Button>
  </div>
);

export const Sizes = () => (
  <d>
    <Button style={{ marginRight: 10 }}>Default</Button>
    <Button style={{ marginRight: 10 }} size="large">
      Large
    </Button>
    <Button size="small">Small</Button>
  </d>
);

export const ContainsIcon = () => (
  <>
    <Button style={{ marginRight: 10 }}>
      <FontAwesomeIcon icon={faCoffee} />
    </Button>
    <Button style={{ marginRight: 10 }} icon={<FontAwesomeIcon icon={faCoffee} />}>
      Label
    </Button>
    <Button icon={<FontAwesomeIcon icon={faCoffee} />} size="small">
      Label
    </Button>
  </>
);
