import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const defaultButtonStyle = {
  cursor: 'pointer',
  border: '1px solid green',
  borderRadius: '5px / 10px',
  width: '100px',
  textAlign: 'center',
};

export const Button = ({onClick, children}) => {
  return <div
    className="button"
    onClick={onClick}
    style={defaultButtonStyle}
  >
    {children}
  </div>
};

export const buttonStory = storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀!!
      </span>
    </Button>
  ));