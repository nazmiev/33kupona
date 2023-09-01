export async function getAction(url: string) {
  let response = await fetch(`https://33kupona.ru/tomsk/${url}?format=json`);
  let json = await response.json();
  return json.action ?? null;
}

export async function getComments(url: string) {
  let response = await fetch(`https://33kupona.ru/tomsk/${url}/comment?format=json`);
  let json = await response.json();
  return json.comments ?? [];
}

export async function getCategoryActions(categoryId: number) {
  let response = await fetch(`https://6438e0e91b9a7dd5c959dd29.mockapi.io/akcii?category=`+categoryId);
  let actions = await response.json();
  return actions ?? null;
}

export async function getAllActions() {
  let response = await fetch('https://33kupona.ru/?format=json');
  let json = await response.json();
  let actions = Object.values(json?.actions ?? []);
  return actions;
}

/**
 * Множественное число для русских слов
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
  if (left > (3600*24)) {
    return Math.floor(left / (3600*24)) + ' ' + pluralizeRus(Math.floor(left / (3600*24)), 'день', 'дня', 'дней');
  }
  if (left > (3600)) {
    return Math.floor(left / (3600)) + ' ' + pluralizeRus(Math.floor(left / (3600)), 'час', 'часа', 'часов');
  }
  if (left > (60)) {
    return Math.floor(left / (60)) + ' ' + pluralizeRus(Math.floor(left / (60)), 'минута', 'минуты', 'минут');
  }
  return left + ' ' + pluralizeRus(left, 'секунда', 'секунды', 'секунд');
  }