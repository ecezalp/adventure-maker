import React from 'react';
import PropTypes from 'prop-types';
import {theme1} from "../../../themes/theme1";
import {getLinks} from "../../../helpers/storybookHelpers";
import AdventureLink from "../adventureLink/adventureLink";
import {style} from "./style";

//TODO: Use refs instead of modifying DOM
export const AdventureLinkLayer = ({theme = theme1, links}) => {

  const getRectById = id => document.getElementById(id).getBoundingClientRect();

  const getHorizontalCoordinate = id => getRectById(id).x + (getRectById(id).width / 2);

  const getVerticalCoordinate = id => getRectById(id).y + (getRectById(id).height / 2);

  const getLineFromDOM = ({beginningId, endId}) => document.getElementById(`line-${beginningId}-${endId}`);

  const setLineAttributes = (line, {beginningId, endId}) => {
    line.setAttribute("x1", getHorizontalCoordinate(beginningId));
    line.setAttribute("y1", getVerticalCoordinate(beginningId));
    line.setAttribute("x2", getHorizontalCoordinate(endId));
    line.setAttribute("y2", getVerticalCoordinate(endId));
  };

  const drawLinesByModifyingDOM = () => {
    setTimeout(() => {
      for (let index in links) {
        setLineAttributes(getLineFromDOM(links[index]), links[index]);
      }
    }, 500);
  };

  return <svg id="svg" style={style}>
    {links.map(link => <AdventureLink link={link} color={theme.colors[10]}/>)}
    {drawLinesByModifyingDOM()}
  </svg>
};

AdventureLinkLayer.propTypes = {
  theme: PropTypes.object,
  links: PropTypes.array.isRequired,
};
