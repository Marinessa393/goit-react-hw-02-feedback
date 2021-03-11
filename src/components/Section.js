import React from 'react';
import PropTypes from 'prop-types';

function Section(props) {
  const { title, children } = props;
  return (
    <>
      <h2 className="feedback__mainTitle">{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
