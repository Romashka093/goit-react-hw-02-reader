import React from 'react';

const Progress = ({ step, currentPage, totalPages }) => (
  <>
    <p>
      {currentPage}/{totalPages}
    </p>
  </>
);

export default Progress;

// {step('currentPage')}/{step('totalPages')}
// currentPage = текущий активный индекс/ totalPages = length [] = длянна массива
