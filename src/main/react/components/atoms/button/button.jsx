import * as React from 'react';
import {theme1} from "../../../themes/theme1";
import {getStyle} from "./style";
import PropTypes from 'prop-types';

export const Button = ({onClick, children, colorTheme = theme1}) => {
  return <div
    className="button"
    onClick={onClick}
    style={getStyle(colorTheme)}
  >
    {children}
  </div>
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  colorTheme: PropTypes.object
};