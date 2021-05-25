import React from 'react';
import tomImage from '../images/tom.jpg';

import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    type: 'user',
  },
};

// eslint-disable-next-line react/prop-types
const Base = ({ src, ...props }) => (
  <div>
    <Avatar isLoading {...props} />
    <Avatar username="Tom Coleman" {...props} />
    <Avatar username="Tom Coleman" src={src || tomImage} {...props} />
  </div>
);

export const Large = () => <Base size="large" />;

export const Medium = () => <Base />;

export const Small = () => <Base size="small" />;

export const Tiny = () => <Base size="tiny" />;
