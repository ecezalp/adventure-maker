const emptyNode = {
  id: 1,
  depth: 0,
};

const initialState = {
  nodes: [
    emptyNode,
  ]
};

const nodes = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default nodes;