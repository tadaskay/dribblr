import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selector } from '../duck';

const propTypes = {
  actions: PropTypes.shape({
    fetchMoreShots: PropTypes.func.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

class Loader extends Component {
  componentDidMount() {
    this.props.actions.fetchMoreShots();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  storeRef = (element) => {
    this.ref = element;
  };

  needsFetch = () => {
    // eslint-disable-next-line react/no-find-dom-node
    const loaderY = ReactDOM.findDOMNode(this.ref).getBoundingClientRect().y;
    return (loaderY < window.innerHeight * 2 && !this.props.loading);
  };

  handleScroll = () => {
    if (this.needsFetch()) {
      this.props.actions.fetchMoreShots();
    }
  };

  render() {
    return (
      <div ref={this.storeRef}>
        {this.props.loading && (
          <p>Loading!</p>
        )}
      </div>
    );
  }
}

Loader.propTypes = propTypes;

const mapStateToProps = state => ({ loading: selector(state).loading });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
