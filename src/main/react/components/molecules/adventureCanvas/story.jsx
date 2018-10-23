import React from 'react';
import {storiesOf} from "@storybook/react";
import AdventureCanvas from "./adventureCanvas";

const clickHandler = () => {
};

const getLink = (beginningId, endId) => ({beginningId, endId});

const getNode = (id, depth) => ({id, depth});

const oneWayNodes = [...Array(5)].map((el, i) =>
  getNode(i, 0));

const oneWayLinks = [...Array(4)].map((el, i) =>
  getLink(i, i + 1));

const twoWayNodes = [
  getNode(0,1),
  getNode(1,2),
  getNode(2,2),
  getNode(3,3),
  getNode(4,3),
  getNode(5,3),
  getNode(6,3),
  getNode(7,4),
  getNode(8,4),
  getNode(9,4),
  getNode(10,4),
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

export const adventureCanvasStory = storiesOf('Molecules/Canvas', module)
  .add('empty', () => <AdventureCanvas/>)
  .add('one way chain', () => <AdventureCanvas nodes={oneWayNodes} links={oneWayLinks}/>)
  .add('two way chain', () => <AdventureCanvas nodes={twoWayNodes} links={twoWayLinks}/>);