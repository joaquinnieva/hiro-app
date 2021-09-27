import { createStore } from "redux";

// state
const initialState = {
  team: [],
};

// reducer - actions - types
const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEAM": {
      return action.hero
        ? { ...state, team: state.team.concat(action.hero) }
        : { ...state };
    }

    case "DELETE":
      return {
        ...state,
        team: state.team.filter((hero) => hero.id !== action.hero.id),
      };

    default:
      return state;
  }
};

// store
export default createStore(heroesReducer);
