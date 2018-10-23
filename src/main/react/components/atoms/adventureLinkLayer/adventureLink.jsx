import React from 'react';
import PropTypes from 'prop-types';

export default function AdventureLink({link, color, zoom = 10}) {

  const {beginningId, endId} = link;

  return <line id={`line-${beginningId}-${endId}`}
               stroke-width={zoom > 9 ? "2" : "1"}
               stroke={color}
  />
};

AdventureLink.propTypes = {
  color: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  zoom: PropTypes.number,
};