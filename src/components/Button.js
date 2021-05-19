/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const buttonConstant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  LIGHT: 'light',
  DARK: 'dark',
  LINK: 'link',
  LARGE: 'large',
  SMALL: 'small',
};

const {
  PRIMARY,
  SECONDARY,
  SUCCESS,
  DANGER,
  WARNING,
  INFO,
  LIGHT,
  DARK,
  LINK,
  LARGE,
  SMALL,
} = buttonConstant;

const Button = ({ htmlType, type, size, icon, className, children, ...props }) => {
  const classList = ['btn'];
  if (type) {
    classList.push(`btn-${type}`);
  }
  switch (size) {
    case LARGE:
      classList.push('btn-lg');
      break;
    case SMALL:
      classList.push('btn-sm');
      break;
    default:
      break;
  }
  return (
    <button className={clsx([...classList, className])} type={htmlType} {...props}>
      {icon ? (
        <>
          <span>{icon && icon}</span>
          <span style={{ marginLeft: 10 }}>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  htmlType: PropTypes.string,
  type: PropTypes.oneOf([PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, LIGHT, DARK, LINK]),
  size: PropTypes.oneOf([LARGE, SMALL]),
  className: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Button.defaultProps = {
  htmlType: 'button',
  type: PRIMARY,
  size: LARGE,
  className: '',
  icon: null,
};

export default Button;
