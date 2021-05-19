import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const badgeConstant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  LIGHT: 'light',
  DARK: 'dark',
};

const { PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, LIGHT, DARK } = badgeConstant;

export function Badge({ type, rounded, ...props }) {
  const classList = ['badge'];
  if (type) {
    classList.push(`bg-${type}`);
    if (type === LIGHT) {
      classList.push('text-dark');
    }
  }
  if (rounded) {
    classList.push('rounded-pill');
  }
  return <span className={clsx(classList)} {...props} />;
}

Badge.propTypes = {
  type: PropTypes.oneOf([PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, LIGHT, DARK]),
  rounded: PropTypes.bool,
};

Badge.defaultProps = {
  type: PRIMARY,
  rounded: false,
};
