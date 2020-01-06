import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  onPrevClick,
  onNextClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) => (
  <>
    <section>
      <button onClick={onPrevClick} type="button" disabled={prevBtnDisabled}>
        Назад
      </button>
      <button onClick={onNextClick} type="button" disabled={nextBtnDisabled}>
        Вперед
      </button>
    </section>
  </>
);

Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
