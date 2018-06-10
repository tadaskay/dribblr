import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Overlaid from '../../common/Overlaid/Overlaid';
import GhostButton from '../../common/GhostButton/GhostButton';
import { actions, selector } from '../duck';
import Heart from '../../common/Heart/Heart';
import './Shot.scss';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    toggleFavorite: PropTypes.func.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

const Shot = ({
  id, title, author, imageUrl, actions: { toggleFavorite }, isFavorite,
}) => {
  const overlay = (
    <Fragment>
      <div className="Shot-overlay-title">{title}</div>
      <hr />
      <div className="Shot-overlay-author">{author}</div>
      <GhostButton className="Shot-overlay-favorite" onClick={() => toggleFavorite(id)}>Favourite</GhostButton>
    </Fragment>
  );

  const content = (
    <div>
      <img src={imageUrl} alt={title} />
      {isFavorite && <Heart className="Shot-content-heart" />}
    </div>
  );

  return (
    <div className="Shot-container">
      <Overlaid
        contentClassName="Shot-content"
        overlayClassName="Shot-overlay"
        content={content}
        overlay={overlay}
      />
    </div>
  );
};

Shot.propTypes = propTypes;

const mapStateToProps = (state, props) => ({ isFavorite: selector(state).favorites.has(props.id) });

const mapDispatchToProps = (dispatch) => {
  const { toggleFavorite } = actions;
  return { actions: bindActionCreators({ toggleFavorite }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shot);
