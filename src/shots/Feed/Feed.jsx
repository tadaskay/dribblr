import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../duck';

const propTypes = {
  actions: PropTypes.shape({
    queryShots: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line
  shots: PropTypes.any,
};
const defaultProps = {};

class Feed extends Component {
  componentDidMount() {
    this.props.actions.queryShots();
  }

  render() {
    return (
      <p>{JSON.stringify(this.props.shots)}</p>
    );
  }
}

Feed.propTypes = propTypes;
Feed.defaultProps = defaultProps;

const mapStateToProps = state => ({
  shots: state.shots.shots,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
