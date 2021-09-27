export default function filterDuplicate(state, hero) {
  let existHero = state.find((heroes) => heroes.id === hero.id);

  return existHero ? {} : { hero };
}
