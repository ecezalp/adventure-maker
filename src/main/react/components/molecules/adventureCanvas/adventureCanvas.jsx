import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {theme1} from "../../../themes/theme1";
import {depthStyle, emptyStyle, getStyle, getZoomStyle} from "./style";
import {AdventureLinkLayer} from "../../atoms/adventureLinkLayer/adventureLinkLayer";
import {AdventureNode} from "../../atoms/adventureNode/adventureNode";

export default function AdventureCanvas({nodes, links, theme = theme1, zoom}) {

  const emptyMessage = <div style={emptyStyle}>
    Your canvas is currently empty. Add a page!
  </div>;

  const getMaxDepth = nodes =>
    Object.keys(groupNodesByField(nodes, "rowIndex"))
      .sort()[Object.keys(groupNodesByField(nodes, "rowIndex")).length - 1];

  const linkLayer = links &&
    <AdventureLinkLayer
      links={links}
      theme={theme}
      zoom={zoom}
    />;

  const getNode = (node, zoom) =>
    <AdventureNode
      id={node.id}
      depth={node.rowIndex}
      onClick={() => {
      }}
      zoom={zoom}
    />;

  const groupNodesByField = (nodes, field) =>
    _.groupBy(nodes, node => node[field]);

  const getRowByRowIndex = (nodes, zoom) =>
    <div style={depthStyle("row")}>
      {nodes.map(node => getNode(node, zoom))}
    </div>;

  const getColumnByColumnIndex = groupedNodes =>
    <div style={{
      ...depthStyle("column"),
    }}>
      {groupedNodes.map(groupedNode => getNode(groupedNode, zoom))}
    </div>;

  const extractNodes = (nodes, zoom, field, callback) =>
    Object.values(groupNodesByField(nodes, field))
      .map(groupedNodes => callback(groupedNodes, zoom));

  const getColumnNodes = (nodes, zoom) =>
    extractNodes(nodes, zoom, "columnIndex", getColumnByColumnIndex);

  const getRowNodes = (nodes, zoom) =>
    extractNodes(nodes, zoom, "rowIndex", getRowByRowIndex);

  const reduceNodes = nodes =>
    nodes.reduce((acc, el) => {
      if (el.rowIndex && !el.columnIndex) acc.rowNodes.push(el);
      if (!el.rowIndex && el.columnIndex) acc.columnNodes.push(el);
      return acc;
    }, {
      columnNodes: [],
      rowNodes: [],
    });

  const getAllNodes = (nodes, zoom) => {
    const reducedNodes = reduceNodes(nodes);
    return [
      ...getRowNodes(reducedNodes.rowNodes, zoom),
      ...getColumnNodes(reducedNodes.columnNodes, zoom),
    ];
  };

  const renderedNodes = nodes && nodes.length > 0
    ? getAllNodes(nodes, zoom)
    : emptyMessage;

  return <div style={getStyle(theme, getMaxDepth(getMaxDepth(nodes)))}>
    {renderedNodes}
    {linkLayer}
  </div>;
}

AdventureCanvas.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.array,
  theme: PropTypes.object,
  zoom: PropTypes.number,
};
