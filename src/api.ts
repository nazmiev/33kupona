const access_token = sessionStorage.getItem('vrb') ?? '';

const params = new URLSearchParams({
  format: 'json',
  access_token: access_token,
});

export async function getAction(url: string) {
  let response = await fetch(`https://33kupona.ru/tomsk/${url}?` + params);
  let json = await response.json();
  return json.action ?? null;
}

export async function getComments(url: string) {
  let response = await fetch('https://33kupona.ru/tomsk/${url}/comment?' + params);
  let json = await response.json();
  return json.comments ?? [];
}

export async function getCategoryActions(categoryId: number) {
  let response = await fetch('https://6438e0e91b9a7dd5c959dd29.mockapi.io/akcii?category=' + categoryId);
  let actions = await response.json();
  return actions ?? null;
}

export async function getAllActions() {
  let response = await fetch('https://33kupona.ru/?' + params);
  let json = await response.json();
  let actions = Object.values(json?.actions ?? []);
  ///////категориии есть тутава
  return actions;
}

export async function getOffers(action_id: number) {
  const params = new URLSearchParams({
    action_id: ''+ action_id,
    format: 'json'
  })
  let response = await fetch('https://33kupona.ru/ajax/offer?' + params);
  let json = await response.json();
  let offers = Object.values(json ?? []);
  return offers;
}

export async function createInvoice(counts: any) {
  let data: any = {
    format: 'json',
    access_token: access_token
  };

  counts.forEach((el: any) => {
    data['count[' + el.id + ']'] = el.count;
  })
  let response = await fetch('https://33kupona.ru/ajax/invoice', {
    method: "POST",
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
    inv: invoiceId,
    format: 'json',
    access_token: access_token
  };
  let response = await fetch('https://33kupona.ru/payment/tinkoff/init', {
    method: "POST",
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
    format: 'json',
  };
  let response = await fetch('https://33kupona.ru/login', {
    method: "POST",
    body: new URLSearchParams(data),
  });
  let json = await response?.json();

  if (json.success) {
    params.set('access_token', json.success)
    sessionStorage.setItem('vrb', json.success)
  }
  if (json.error) {
    alert(Object.values(json.error).join("\n"));
  }
  return json;
}

export async function postRegister(email: string, password: string, agreement_confirmed: boolean) {
  const data: any = {
    'obj[email]': email,
    'obj[password]': password,
    'obj[agreement_confirmed]': agreement_confirmed,
    send: 1,
    format: 'json',
  };
  let response = await fetch('https://33kupona.ru/register', {
    method: "POST",
    body: new URLSearchParams(data),
  });
  let json = await response?.json();

  if (json.success) {
    params.set('access_token', json.success)
    sessionStorage.setItem('vrb', json.success)
  }
  if (json.error) {
    // alert(Object.values(json.error).join("\n"));
  }
  return json;
}

export async function getUser() {
  let response = await fetch('https://33kupona.ru/api/user?' + params);
  let json = await response?.json();
  return json;
}

export async function getProfile() {
  console.log('https://33kupona.ru/profile?' + params);
  let response = await fetch('https://33kupona.ru/profile?' + params);
  let json = await response?.json();
  return json;
}

export async function LogOut() {
  sessionStorage.setItem('vrb', '');
  params.delete('access_token');
}
