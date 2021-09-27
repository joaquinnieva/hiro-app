export default function getStats(team) {
  // fix error and transfer to int
  const isStat = (stat) => {
    if (stat === "null") {
      return 0;
    } else {
      return parseInt(stat);
    }
  };
  // calculate the total stat
  const totalCombat = team.reduce(
    (prev, next) => prev + isStat(next?.powerstats.combat),
    0
  );

  const totalIntelligence = team.reduce(
    (prev, next) => prev + isStat(next?.powerstats.intelligence),
    0
  );
  const totalStrength = team.reduce(
    (prev, next) => prev + isStat(next?.powerstats.strength),
    0
  );
  const totalSpeed = team.reduce(
    (prev, next) => prev + isStat(next?.powerstats.speed),
    0
  );
  const totalDurability = team.reduce(
    (prev, next) => prev + isStat(next?.powerstats.durability),
    0
  );
  const totalPower = team.reduce(
    (prev, next) => prev + isStat(next?.powerstats.power),
    0
  );
  // stats to array
  let totalStats = [
    { name: "Intelligence", amount: totalIntelligence },
    { name: "Strength", amount: totalStrength },
    { name: "Speed", amount: totalSpeed },
    { name: "Durability", amount: totalDurability },
    { name: "Power", amount: totalPower },
    { name: "Combat", amount: totalCombat },
  ];
  // stats ordered by amount
  totalStats.sort((a, b) => {
    if (a.amount < b.amount) {
      return 1;
    }
    if (a.amount > b.amount) {
      return -1;
    }
    return 0;
  });

  return totalStats;
}
