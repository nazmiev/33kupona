import json from './assets/offers.json'

export async function getAction(id: number) {
  let response = await fetch(`https://6438e0e91b9a7dd5c959dd29.mockapi.io/akcii?id=`+id);
  let json = await response.json();
  let action = json[0];
  return action ?? null;
}

export async function getCategoryActions(categoryId: number) {
  let response = await fetch(`https://6438e0e91b9a7dd5c959dd29.mockapi.io/akcii?category=`+categoryId);
  let actions = await response.json();
  return actions ?? null;
}

export async function getAllActions() {
  let response = await fetch('https://33kupona.ru/?format=json');
  let json = await response.json();
  console.log('json: ', json);
  let actions = Object.values(json?.actions ?? []);
  return actions;
}

export async function getOffers(id: number) {
  const offers = json.filter(word => word.id == id)[0].offers;
  return offers ?? null;
}

/**
 * Множественное число для русских слов
 *
 * @param {*} number
 * @param {*} one
 * @param {*} two
 * @param {*} five
 * @returns
 */
export const pluralizeRus = function (number: number | string, one: string, two: string, five: string) {
  number = Math.abs(number as number) % 100;
  if (number > 10 && number < 20) {
      return five;
  }
  number %= 10;
  if (number > 1 && number < 5) {
      return two;
  }
  if (number === 1) {
      return one;
  }
  return five;
};

/**
 * Сколько осталось до конца акции?
 *
 */
export const secondsToDh = function (left: number) {
  var d = Math.floor(left / (3600*24));
  var h = Math.floor(left % (3600*24) / 3600);
  
  var dDisplay = d > 0 ? d + (d == 1 ? " день " : " дней ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " час " : " часов ") : "";

  return d > 0 ? dDisplay : dDisplay + hDisplay;
  }