import React from 'react';
import PropTypes from 'prop-types';
import './GhostButton.scss';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
const defaultProps = {
  className: '',
  onClick: () => {
  },
};

const GhostButton = ({ className, children, onClick }) => (
  <button className={`GhostButton ${className}`} onClick={onClick}>{children}</button>
);

GhostButton.propTypes = propTypes;
GhostButton.defaultProps = defaultProps;

export default GhostButton;
