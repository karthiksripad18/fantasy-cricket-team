export default (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, team: [...state.team, action.payload] };
    case "REMOVE_PLAYER":
      return state;
    default:
      return state;
  }
};
