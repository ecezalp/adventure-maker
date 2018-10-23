import React from 'react';
import PropTypes from 'prop-types';
import {getStyle} from './style';
import {theme1} from "../../../themes/theme1";
import {Button} from "../../atoms/button/button";

export default function ActionPanel ({theme = theme1, stage = 0}) {

  const stage0 = <Button onClick={()=>{}} children={"Create Story"} colorTheme={theme}/>;

  return <div style={getStyle(theme)}>
    {stage0}
  </div>
}

ActionPanel.propTypes = {
  theme: PropTypes.object,
  stage: PropTypes.number,
};