import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {theme1} from "../../../themes/theme1";
import {depthStyle, emptyStyle, getStyle} from "./style";
import {AdventureLinkLayer} from "../../atoms/adventureLinkLayer/adventureLinkLayer";
import {AdventureNode} from "../../atoms/adventureNode/adventureNode";

export default function AdventureCanvas({nodes, links, theme = theme1}) {

  const emptyMessage = <div style={emptyStyle}>
    Your canvas is currently empty. Add a page!
  </div>;

  const groupNodesByDepth = nodes =>
    _.groupBy(nodes, node => node.depth);

  const depthToRow = nodes => <div style={depthStyle(getMaxDepth(nodes))}>
    {nodes.map(node => <AdventureNode id={node.id} depth={node.depth} onClick={() => {
    }}/>)}
  </div>;

  const getMaxDepth = nodes =>
    Object.keys(groupNodesByDepth(nodes))
      .sort()[Object.keys(groupNodesByDepth(nodes)).length - 1];

  const getNodes = nodes =>
    Object.values(groupNodesByDepth(nodes))
      .sort()
      .map(depthToRow);

  return <div style={getStyle(theme, getMaxDepth(getMaxDepth(nodes)))}>
    {nodes && nodes.length > 0 ? getNodes(nodes) : emptyMessage}
    {links && <AdventureLinkLayer links={links} theme={theme}/>}
  </div>;
}

AdventureCanvas.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.array,
  theme: PropTypes.object,
};
