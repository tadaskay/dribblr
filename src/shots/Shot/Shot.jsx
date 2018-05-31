import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shot.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
const defaultProps = {};

// eslint-disable-next-line react/prefer-stateless-function
class Shot extends Component {
  render() {
    const { title, author, imageUrl } = this.props;
    return (
      <div className="Shot-container">
        <div
          className="Shot-content"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <span>{title}</span>
          <p>{author}</p>
        </div>

      </div>
    );
  }
}

Shot.propTypes = propTypes;
Shot.defaultProps = defaultProps;

export default Shot;
