export default function filterDuplicate(state, hero) {
  // watch if exist the hero
  let existHero = state.find((heroes) => heroes.id === hero.id);

  return existHero ? {} : { hero };
}
