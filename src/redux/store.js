import { createStore } from "redux";

// constantes
const initialState = {
  team: [],
};

// types

// reducer
const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEAM":
      return { ...state, team: state.team.concat(action.hero) };

    default:
      return state;
  }
};

// acciones

// store
export default createStore(heroesReducer);
