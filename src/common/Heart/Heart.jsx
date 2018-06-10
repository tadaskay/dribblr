import React from 'react';
import PropTypes from 'prop-types';
import './Heart.scss';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: '',
};

const Heart = ({ className }) => <div className={`heart ${className}`} />;

Heart.propTypes = propTypes;
Heart.defaultProps = defaultProps;

export default Heart;
