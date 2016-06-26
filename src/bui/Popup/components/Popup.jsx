import React, { PropTypes } from 'react';

const Popup = ({ text }) => {
  return (
    <div>Pop Up: {text}</div>
  );
};

Popup.propTypes = {
  text: PropTypes.string.isRequired,
};

Popup.defaultProps = {
  text: 'Default Text',
};

export default Popup;
