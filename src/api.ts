const headers = {
  'X-VRB': sessionStorage.getItem('vrb') ?? '',
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
  let response = await fetch(`https://6438e0e91b9a7dd5c959dd29.mockapi.io/akcii?category=` + categoryId);
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
  let response = await fetch('https://33kupona.ru/ajax/offer?format=json&action_id=' + action_id);
  let json = await response.json();
  let offers = Object.values(json ?? []);
  return offers;
}

export async function createInvoice(counts: any) {
  let data: any = {};

  counts.forEach((el: any) => {
    data['count[' + el.id + ']'] = el.count;
  })

  let response = await fetch('https://33kupona.ru/ajax/invoice?format=json', {
    method: "POST",
    headers: headers,
    body: new URLSearchParams(data),
  });
  let json = await response?.json();
  if (json?.item?.offers) {
    json.item.offers = Object.entries(json.item.offers).map(([id, offer]: any) => { offer.id = id; return offer });
  }
  return json;
}

export async function createPayment(invoiceId: number) {
  let data: any = {
    inv: invoiceId
  };
  let response = await fetch('https://33kupona.ru/payment/tinkoff/init?format=json', {
    method: "POST",
    headers: headers,
    body: new URLSearchParams(data),
  });

  let json = await response?.json();

  return json;
}

export async function postAuth(name: string, pass: string, remember_me: boolean) {
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
