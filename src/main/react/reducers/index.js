import {combineReducers} from 'redux';
import theme from './themeReducer';
import nodes from './nodeReducer';
import paths from './pathReducer';

export default combineReducers({
  theme,
  nodes,
  paths,
});