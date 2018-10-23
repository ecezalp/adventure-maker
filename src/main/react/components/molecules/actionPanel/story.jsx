import React from 'react'
import {storiesOf} from "@storybook/react";
import ActionPanel from "./actionPanel";

export const actionPanelStory = storiesOf('Molecules/ActionPanel', module)
  .add('stage 0', () => <ActionPanel/>);

