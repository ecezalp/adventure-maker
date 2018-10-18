import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const defaultSkeletonNodeStyle = {
  cursor: 'pointer',
};

export const SkeletonNode = ({onClick, id}) => {
  return <div
    className="skeleton-node"
    onClick={onClick}
    style={defaultSkeletonNodeStyle}
  >
    <svg viewBox="0 0 75 75" width="50px">
      <path d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z" stroke="black" stroke-width="3" fill="white" />
      <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="30" fill="blue">{id}</text>
    </svg>
  </div>
};

export const skeletonNodeStory = storiesOf('skeletonNode', module)
  .add('default', () => <SkeletonNode onClick={action('clicked')} id={12}/>);