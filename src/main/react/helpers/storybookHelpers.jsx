import React from "react";
import {action} from '@storybook/addon-actions';
import {AdventureNode} from "../components/presentational/atoms/adventureNode";

export const getNodesVariedByDepth = () => {
  const nodes = [];
  for (let i = 1; i < 12; i++) {
    nodes.push(<div style={{padding: '20px'}}>
      <AdventureNode
        onClick={action(`clicked node ${i}`)}
        id={i}
        depth={i}
      />
    </div>)
  }
  return <div style={{display: 'flex', backgroundColor: '#F7F7F7'}}>{nodes}</div>;
};

export const getOneWayNode = () => <div style={{display: 'flex', backgroundColor: '#F7F7F7', padding: '20px'}}><AdventureNode
  onClick={action(`clicked one way node`)}
  id={14}
  isOneWay={true}
/></div>;