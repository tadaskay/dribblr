import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Overlaid from '../../common/Overlaid/Overlaid';
import GhostButton from '../../common/GhostButton/GhostButton';
import { actions } from '../duck';
import './Shot.scss';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    toggleFavorite: PropTypes.func.isRequired,
  }).isRequired,
};

const Shot = ({
  id, title, author, imageUrl, actions: { toggleFavorite },
}) => {
  const overlay = (
    <Fragment>
      <div className="Shot-overlay-title">{title}</div>
      <hr />
      <div className="Shot-overlay-author">{author}</div>
      <GhostButton className="Shot-overlay-favorite" onClick={() => toggleFavorite(id)}>Favourite</GhostButton>
    </Fragment>
  );

  return (
    <div className="Shot-container">
      <Overlaid
        contentClassName="Shot-content"
        overlayClassName="Shot-overlay"
        content={<img src={imageUrl} alt={title} />}
        overlay={overlay}
      />
    </div>
  );
};

Shot.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => {
  const { toggleFavorite } = actions;
  return { actions: bindActionCreators({ toggleFavorite }, dispatch) };
};

export default connect(null, mapDispatchToProps)(Shot);
