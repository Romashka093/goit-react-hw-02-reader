import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onPrevClick, onNextClick }) => (
  <>
    <section>
      <button onClick={onPrevClick} type="button">
        Назад
      </button>
      <button onClick={onNextClick} type="button">
        Вперед
      </button>
    </section>
  </>
);

Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Controls;
