import React from 'react';
import {storiesOf} from "@storybook/react";
import AdventureCanvas from "./adventureCanvas";

const clickHandler = () => {
};

const getLink = (beginningId, endId) => ({beginningId, endId});

const getNode = (id, rowIndex, columnIndex) => ({id, rowIndex, columnIndex});

const oneWayNodes = [...Array(5)].map((el, i) =>
  getNode(i, 0, 1));

const oneWayLinks = [...Array(4)].map((el, i) =>
  getLink(i, i + 1));

const twoWayNodes = [
  getNode(0,1,0),
  getNode(1,2,0),
  getNode(2,2,0),
  getNode(3,3,0),
  getNode(4,3,0),
  getNode(5,3,0),
  getNode(6,3,0),
  getNode(7,4,0),
  getNode(8,4,0),
  getNode(9,4,0),
  getNode(10,4,0),
];

const twoWayLinks = [
  getLink(0, 1),
  getLink(0, 2),
  getLink(1, 3),
  getLink(1, 4),
  getLink(2, 5),
  getLink(2, 6),
  getLink(3, 7),
  getLink(3, 8),
  getLink(4, 9),
  getLink(4, 10),
];

const hybridNodes = [
  getNode(0,0,1),
  getNode(1,0,1),
  getNode(2,0,1),
  getNode(3,0,1),
  getNode(4,1,0),
  getNode(5,0,2),
  getNode(6,0,2),
  getNode(7,2,0),
  getNode(8,2,0),
  getNode(9,0,3),
  getNode(10,0,3),
  getNode(11,0,3),
  getNode(12,0,3),
  getNode(13,0,3),
];

const hybridLinks = [
  getLink(0, 1),
  getLink(1, 2),
  getLink(2, 3),
  getLink(3, 4),
  getLink(4, 5),
  getLink(4, 6),
  getLink(5, 7),
  getLink(6, 8),
  getLink(7, 9),
  getLink(7, 10),
  getLink(8, 11),
  getLink(8, 12),
  getLink(12, 13),
];

export const adventureCanvasStory = storiesOf('Molecules/AdventureCanvas', module)
  .add('empty', () => <AdventureCanvas/>)
  .add('one way chain', () => <AdventureCanvas nodes={oneWayNodes} links={oneWayLinks} zoom={10}/>)
  .add('two way chain', () => <AdventureCanvas nodes={twoWayNodes} links={twoWayLinks} zoom={10}/>)
  .add('hybrid chain', () => <AdventureCanvas nodes={hybridNodes} links={hybridLinks} zoom={10}/>)
  .add('zoomed out', () => <AdventureCanvas nodes={twoWayNodes} links={twoWayLinks} zoom={5}/>)
  .add('zoomed in', () => <AdventureCanvas nodes={twoWayNodes} links={twoWayLinks} zoom={20}/>);