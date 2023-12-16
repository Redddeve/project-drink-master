const glasses = [
  "Highball glass",
  "Cocktail glass",
  "Old-fashioned glass",
  "Whiskey Glass",
  "Collins glass",
  "Pousse cafe glass",
  "Champagne flute",
  "Whiskey sour glass",
  "Cordial glass",
  "Brandy snifter",
  "White wine glass",
];
const categorie = [
  "Ordinary Drink",
  "Cocktail",
  "Snake",
  "Other/Unknow",
  "Cocoa",
  "Shot",
  "Coffee/Tea",
  "Homemade Liqueur",
  "Punch / Party Drink",
  "Beer",
  "Soft Drink",
];
const ingredients = [
  "Lemon",
  "Orange juice",
  "Shoko",
  "Sprite",
  "Vodka",
  "Rum",
  "Coffee",
  "Peach Liqueur",
  "Lime",
  "Beer",
  "Soft Drink",
];

export const categoryOptions = categorie.map((el) => {
  return { label: el, value: el };
});
export const glassOptions = glasses.map((el) => {
  return { label: el, value: el };
});
export const ingOptions = ingredients.map((el) => {
  return { label: el, value: el };
});
