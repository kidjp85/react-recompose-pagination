import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import setPropTypes from 'recompose/setPropTypes';
import setDisplayName from 'recompose/setDisplayName';
import defaultProps from 'recompose/defaultProps';

const Page = ({ PageEl, isHidden, isActive, isDisabled, className, children, handleClick }) => {
  if (isHidden) return false;

  const pageClassName = cn(className, {
    'is-active': isActive,
    'is-disabled': isDisabled
  });

  return (
    <PageEl onClick={handleClick} className={pageClassName}>
      {children}
    </PageEl>
  );
};

export default compose(
  setDisplayName('Page'),
  defaultProps({
    PageEl: 'li'
  }),
  setPropTypes({
    PageEl: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isHidden: PropTypes.bool,
    className: PropTypes.string
  }),
  pure
)(Page);
