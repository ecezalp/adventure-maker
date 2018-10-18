import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import {buttonStory} from '../presentational/inputs/button';
import {skeletonNodeStory} from "../presentational/inputs/skeletonNode";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
