import React from 'react';
import PropTypes from 'prop-types';

export default function AdventureLink({link, color}) {

  const {beginningId, endId} = link;

  return <line id={`line-${beginningId}-${endId}`}
               stroke-width="2"
               stroke={color}
  />
};

AdventureLink.propTypes = {
  theme: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
};