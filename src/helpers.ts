const headers = {
  'X-VRB': sessionStorage.getItem('vrb'),
}

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

export async function getOffers(action_id: number) {
  let response = await fetch('https://33kupona.ru/ajax/offer?format=json&action_id='+action_id);
  let json = await response.json();
  let offers = Object.values(json ?? []);
  return offers;
}

export async function createInvoice(counts: any) {
  let data: any = {};

  counts.forEach((el: any) => {
    data['count[' + el.id + ']'] = el.count;
  })

  console.log('createInvoice data: ', data);

  let response = await fetch('https://33kupona.ru/ajax/invoice?format=json', {
    method: "POST",
    headers: headers,
    body: new URLSearchParams(data),
  });
  let json = await response?.json();

  console.log('createInvoice json: ', json);
  
  return json;
}

export async function postAuth(name:string, pass: string, remember_me: boolean) {
  const data: any = {
    'user_auth_name': name,
    'user_auth_pass': pass,
    'remember_me': remember_me,
  };
  let response = await fetch('https://33kupona.ru/login?format=json', {
    method: "POST",
    body: new URLSearchParams(data),
  });
  let json = await response?.json();

  if (json.success) {
    headers['X-VRB'] = json.success;
    sessionStorage.setItem('vrb', json.success)
  }
  if (json.error) {
    alert(Object.values(json.error).join("\n"));
  }
  return json;
}

export async function getUser() {
  let response = await fetch('https://33kupona.ru/api/user?format=json', {
    headers: headers
  });
  let json = await response?.json();
  return json;
}

export async function LogOut() {
  sessionStorage.setItem('vrb', '');
}

// сделать глобальную перем headers или vrb


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