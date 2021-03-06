import React from 'react';
import PropTypes from 'prop-types';
import {theme1} from "../../../themes/theme1";
import {getBorderStyle, getStyle} from "./style";

export const AdventureNode = ({onClick, id, theme = theme1, depth, style, zoom = 10}) => {

  const isOneWay = !depth;

  // depth starts from 1
  const nodeStyle = isOneWay ? getStyle(zoom) : getStyle(zoom, theme, depth - 1);

  const node = <div
    className="adventure-node"
    onClick={() => onClick(id)}
    style={{...style, ...nodeStyle}}
  >
    {id}
  </div>;

  return <div
    className="adventure-node-border"
    style={{...getBorderStyle(zoom, isOneWay), ...style}}
    id={id}
  >
    {node}
  </div>
};

AdventureNode.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  theme: PropTypes.object,
  ref: PropTypes.object,
  style: PropTypes.object,
  zoom: PropTypes.number,
};



