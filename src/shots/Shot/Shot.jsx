import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Overlaid from '../../common/Overlaid/Overlaid';
import GhostButton from '../../common/GhostButton/GhostButton';
import './Shot.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Shot = ({ title, author, imageUrl }) => {
  const overlay = (
    <Fragment>
      <div className="Shot-overlay-title">{title}</div>
      <hr />
      <div className="Shot-overlay-author">{author}</div>
      <GhostButton className="Shot-overlay-favorite">Favourite</GhostButton>
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

export default Shot;
