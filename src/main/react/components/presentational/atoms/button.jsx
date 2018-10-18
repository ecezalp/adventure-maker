import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {theme1} from "../../../themes/theme1";
import {getStyle} from "../../../styles/presentational/atoms/buttonStyle";

export const Button = ({onClick, children, colorTheme = theme1}) => {
  return <div
    className="button"
    onClick={onClick}
    style={getStyle(colorTheme)}
  >
    {children}
  </div>
};

export const buttonStory = storiesOf('Atoms/Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀!!
      </span>
    </Button>
  ));