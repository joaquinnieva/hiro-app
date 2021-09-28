export default function getMessage(state, hero) {
  // getting state alignment
  let goodHero = state.filter((heroes) => heroes.biography?.alignment === "good");
  let badHero = state.filter((heroes) => heroes.biography?.alignment === "bad");
  let id = hero.id;
  let teamId = state.filter((heroes) => heroes.id === id);
  // getting heroe alignment
  let alignment = hero.biography?.alignment;

  // create msg
  if (alignment === "neutral") {
    let msg = "This hero is neutral 🥴";
    return msg;
  }
  if (teamId.length === 1) {
    let msg = "It's already added 🤔";
    return msg;
  }
  if (alignment === "good") {
    if (goodHero.length === 3) {
      let msg = "There are already 3 good heroes";
      return msg;
    }
  }

  if (alignment === "bad") {
    if (badHero.length === 3) {
      let msg = "There are already 3 bad heroes";
      return msg;
    }
  }
}
