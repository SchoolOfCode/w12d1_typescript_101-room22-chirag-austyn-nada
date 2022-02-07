const arshi = {
  name: "Arshi",
  strength: "Awesomeness",
  weakness: "Ferrets up trouser legs",
  numberOfMistakes: 0,
};

const jasien = {
  Name: "Jasien",
  Strength: "Super cool mic",
  Wakness: "Occasional audio cutoff and grey screen",
  NumberOfMistakes: "lots: every time his mic cuts out",
};

function returnNameFromObject(person) {
  console.log(person.Name);
}

returnNameFromObject(jasien);

// type Person = {
//   name: string;
//   strength: string;
//   weakness: string;
//   numberOfMistakes: number;
// };
