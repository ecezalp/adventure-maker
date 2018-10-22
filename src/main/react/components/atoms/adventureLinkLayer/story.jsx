import React from 'react';
import {storiesOf} from '@storybook/react';
import {AdventureLinkLayer} from "./adventureLinkLayer";

const placeholderStyle = {
  backgroundColor: 'black',
  height: '10px',
  width: '10px',
  border: '1px solid gray',
  borderRadius: "50%",
};

const getStyle = () => ({
  ...placeholderStyle,
  position: 'absolute',
  left: Math.floor(Math.random() * 800),
  top: Math.floor(Math.random() * 400),
});

const placeholderNodes = [...Array(11)].map((el, i) =>
  <div
    id={i}
    key={`placeholder-${i}`}
    style={getStyle()}
  />);

const getRandomLinks = () => [...Array(11)].map(el => ({
  beginningId: Math.floor(Math.random() * 10),
  endId: Math.floor(Math.random() * 10),
}));

const getSingleColorLinks = () => <div>
  {placeholderNodes}
  <AdventureLinkLayer links={getRandomLinks()} theme={{colors: [...Array(10), '#b7f557']}}/>
</div>;

export const getMultiColorLinks = () => <div key={Math.floor(Math.random() * 10)}>
  {placeholderNodes}
  <AdventureLinkLayer links={getRandomLinks()} theme={{colors: [...Array(10), '#f3fdbb']}}/>
  <AdventureLinkLayer links={getRandomLinks()} theme={{colors: [...Array(10), '#00d725']}}/>
  <AdventureLinkLayer links={getRandomLinks()} theme={{colors: [...Array(10), '#004b9e']}}/>
</div>;


export const adventureLinkLayerStory = storiesOf('Atoms/AdventureLinkLayer', module)
  .add('singleColor', getSingleColorLinks)
  .add('multiColor', getMultiColorLinks);

