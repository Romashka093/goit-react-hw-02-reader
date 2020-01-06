import React, { Fragment } from 'react';

const Publication = ({ publication }) => {
  const { id, title, text } = publication;
  return (
    <Fragment>
      <article key={id}>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </Fragment>
  );
};
export default Publication;
