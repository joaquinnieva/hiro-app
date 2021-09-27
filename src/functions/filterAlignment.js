export default function filterAlignment(state, hero) {
  // getting alignment
  let goodHero = state.filter(
    (heroes) => heroes.biography?.alignment === "good"
  );
  let badHero = state.filter((heroes) => heroes.biography?.alignment === "bad");

  let alignment = hero?.biography?.alignment;

  // filter by alignment and filter the amount
  if (state.length < 6) {
    if (alignment === "bad") {
      if (badHero.length < 3) {
        return hero;
      }
    }
    if (alignment === "good") {
      if (goodHero.length < 3) {
        return hero;
      }
    }
  }
}
