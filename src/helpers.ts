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
  let response = await fetch('https://6438e0e91b9a7dd5c959dd29.mockapi.io/akcii');
  let actions = await response.json();
  return actions ?? null;
}

export async function getOffers(id: number) {
  const offers = json.filter(word => word.id == id)[0].offers;
  return offers ?? null;
}