import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selector } from '../duck';
import Shot from '../Shot/Shot';
import './Feed.scss';
import Loader from '../Loader/Loader';

const propTypes = {
  shots: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  })).isRequired,
};

const Feed = ({ shots }) => (
  <Fragment>
    <div className="Feed">
      {shots.map(shot =>
        (<Shot
          key={shot.id}
          title={shot.title}
          author={shot.author}
          imageUrl={shot.imageUrl}
        />))
      }
    </div>
    <Loader />
  </Fragment>
);

Feed.propTypes = propTypes;

const mapStateToProps = state => ({ shots: selector(state).shots });

export default connect(mapStateToProps)(Feed);
