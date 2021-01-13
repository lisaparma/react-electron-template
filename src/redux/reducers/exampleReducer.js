const exampleReducer = (
  state = null,
  action
) => {

  switch (action.type) {
    case "EXAMPLE": {
      return ({
        ...state,
      })
    }
    default:
      return state
  }
};

export default exampleReducer;