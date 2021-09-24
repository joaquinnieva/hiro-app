import { createStore } from "redux";

// state
const initialState = {
  login: true,
  team: [],
};

// reducer - actions - types
const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, login: true };
    case "TEAM": {
      // let alignment = state.team.find((hero) => hero.biography.alignment === action.hero.id);
      let existHero = state.team.find((hero) => hero.id === action.hero.id);
      return existHero
        ? { ...state }
        : {
            ...state,
            team: state.team.concat(action.hero),
          };
      // if (existHero) {

      // } else if (alignment) {

      // } {

      // }
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
