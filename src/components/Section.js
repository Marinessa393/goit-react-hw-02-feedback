import React from 'react';
import '../App.css';

function Section(props) {
  const { title, children } = props;
  return (
    <>
      <h2 className="feedback__mainTitle">{title}</h2>
      {children}
    </>
  );
}

export default Section;
