import React from 'react';
import PropTypes from 'prop-types';
import './Overlaid.scss';

const propTypes = {
  content: PropTypes.node,
  overlay: PropTypes.node,
  contentClassName: PropTypes.string,
};
const defaultProps = {
  content: undefined,
  overlay: undefined,
  contentClassName: '',
};

const Overlaid = ({ content, overlay, contentClassName }) => (
  <div className={`Overlaid-content ${contentClassName}`}>
    {content}
    <div className="Overlaid-overlay">{overlay}</div>
  </div>
);

Overlaid.propTypes = propTypes;
Overlaid.defaultProps = defaultProps;

export default Overlaid;
