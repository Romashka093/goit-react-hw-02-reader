import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ publicationIndex, items }) => {
  return (
    <>
      <p>
        {publicationIndex + 1}/{items.length}
      </p>
    </>
  );
};

Progress.propTypes = {
  publicationIndex: PropTypes.number.isRequired,
  items: PropTypes.array,
};

export default Progress;
