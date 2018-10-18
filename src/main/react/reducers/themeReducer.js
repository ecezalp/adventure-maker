import {theme1} from "../themes/theme1";

const initialState = {
  theme: theme1,
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default theme;