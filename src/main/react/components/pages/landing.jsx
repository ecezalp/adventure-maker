import React from 'react';
import AdventureCanvas from "../molecules/adventureCanvas/adventureCanvas";
import {AdventureNode} from "../atoms/adventureNode/adventureNode";
import {AdventureLinkLayer} from "../atoms/adventureLinkLayer/adventureLinkLayer";
import ActionPanel from "../molecules/actionPanel/actionPanel";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const clickHandler = () => {
    };

    const getLink = (beginningId, endId) => ({beginningId, endId});

    const getNode = (id, depth) => ({id, depth});

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

    return <div style={{display: 'flex'}}>
      <ActionPanel/>
      <AdventureCanvas
        zoom={10}
        nodes={twoWayNodes}
        links={twoWayLinks}
      />
    </div>
  }
}