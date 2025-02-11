import React from 'react';
import cx from 'classnames';
import './Button.scss';

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return <button className={cx('Button', className)} ref={ref} {...props} />;
});

export default Button;
