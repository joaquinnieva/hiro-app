export default function getInfoHero(array) {
  //getting info
  const alias = array.biography?.aliases[0];
  const speed = array.powerstats?.speed;
  const height = array.appearance?.height[1];
  const weight = array.appearance?.weight[1];
  const eyeColor = array.appearance?.["eye-color"];
  const hairColor = array.appearance?.["hair-color"];
  const work = array.work?.occupation;
  const alignment = array.biography?.alignment;

  // info to array
  let inArray = [
    { name: "Alias", value: alias },
    { name: "Speed", value: speed },
    { name: "Height", value: height },
    { name: "Weight", value: weight },
    { name: "Eye color", value: eyeColor },
    { name: "Hair color", value: hairColor },
    { name: "Work", value: work },
    { name: "Alignment", value: alignment },
  ];
  return inArray;
}
