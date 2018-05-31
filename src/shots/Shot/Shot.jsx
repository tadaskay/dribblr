import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shot.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
const defaultProps = {};

class Shot extends Component {
  state = {
    overlay: false,
  };

  showOverlay = () => {
    this.setState({
      overlay: true,
    });
  };

  hideOverlay = () => {
    this.setState({
      overlay: false,
    });
  };

  render() {
    const { title, author, imageUrl } = this.props;
    return (
      <div className="Shot-container">
        <div
          className="Shot-content"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onMouseEnter={this.showOverlay}
          onMouseLeave={this.hideOverlay}
        >
          <span>{title}</span>
          <p>{author}</p>
          {this.state.overlay && (
            <p>Over!</p>
          )}
        </div>

      </div>
    );
  }
}

Shot.propTypes = propTypes;
Shot.defaultProps = defaultProps;

export default Shot;
