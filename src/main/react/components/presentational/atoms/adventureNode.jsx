import React from 'react';
import {storiesOf} from '@storybook/react';
import {theme1} from "../../../themes/theme1";
import {getStyle, getBorderStyle} from "../../../styles/presentational/atoms/adventureNodeStyle";
import {getNodesVariedByDepth, getOneWayNode} from "../../../helpers/storybookHelpers";

// About Line 15:
// Depth starts from 1 for all "decision" nodes, and corresponds to a color with in the theme in array that starts from 0.
// oneWay nodes do not have a depth, just a parentId.

export const AdventureNode = ({onClick, id, theme = theme1, depth}) => {

  const isOneWay = !depth;

  const style = isOneWay ? getStyle() : getStyle(theme, depth - 1);

  const node = <div
    className="adventure-node"
    onClick={onClick}
    style={style}
  >
    {id}
  </div>;

  return <div
    className="adventure-node-border"
    style={getBorderStyle(isOneWay)}
  >
    {node}
  </div>
};

export const adventureNodeStory = storiesOf('Atoms/AdventureNode', module)
  .add('one way', getOneWayNode)
  .add('two ways by depth', () => getNodesVariedByDepth())
;



