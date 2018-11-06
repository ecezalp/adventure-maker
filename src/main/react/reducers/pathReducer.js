const emptyPath = {
  id: 1,
  nodeIds: [1],
};

const initialState = {
  paths: [
    emptyPath,
  ]
};

const paths = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default paths;