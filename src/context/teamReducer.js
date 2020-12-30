export default (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, team: [...state.team, action.payload] };
    case "REMOVE_PLAYER":
      return { ...state, team: state.team.filter(p => p.pid !== action.payload)};
    default:
      return state;
  }
};
