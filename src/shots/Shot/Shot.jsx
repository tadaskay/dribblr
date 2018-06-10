import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Shot.scss';
import Overlaid from '../Overlaid/Overlaid';

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Shot = ({ title, author, imageUrl }) => {
  const overlay = (
    <Fragment>
      <div>{title}</div>
      <hr />
      <div>{author}</div>
      <button>Favourite</button>
    </Fragment>
  );

  return (
    <div className="Shot-container">
      <Overlaid
        contentClassName="Shot-content"
        content={<img src={imageUrl} alt={title} />}
        overlay={overlay}
      />
    </div>
  );
};

Shot.propTypes = propTypes;

export default Shot;
