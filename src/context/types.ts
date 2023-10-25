export type User = {
  id: number;
  confirmed: number
  email: string;
  medicine: number;
  phone: string;
}

export type AppStoreType = {
  user: User | null;
  setUser: Function;
  actions: ActionType[];
  setActions: Function;
  categories: CategoryType[];
  setCategories: Function;
  loading: boolean;
  setLoading: Function;
}

export type CategoryType = {
  admin_created: string;
  admin_modified: string;
  id: string;
  item_count: number;
  name: string;
  settings: string;
  sort_id: number;
  url: string;
  url_name: string;
}

export interface ActionType {
  address: string;
  address_link: string;
  admin_created: number;
  admin_modified: number;
  categories: string[];
  client_id: number;
  comment_count: number;
  comments: []
  condition: string;
  coupon_max: number;
  coupon_min: number;
  coupon_price: number;
  coupon_sold: number;
  css: string;
  date_created: number;
  date_end: number;
  date_modified: number;
  date_start: number;
  description: string;
  discount: number;
  id: number;
  image: string;
  image_big: string;
  left: number;
  map: null
  name: string;
  phone: string;
  price: number;
  published: number;
  salary_date_end: number;
  salary_date_start: number;
  schedule: string;
  short: string;
  site: string;
  subscribe: 0
  timetable: any;
  type: number;
  url: string;
  url_name: string;
  user_id: null;
}

export type CommentType = {
  avatar_dims: { width: number, height: number };
  comments: CommentType[];
  content: string;
  date_created: number;
  html: string;
  id: number;
  ip_addr: string;
  item_id: number;
  moderator_id: null
  moderator_name: string;
  parent_id: number;
  published: number;
  rating: number;
  url_name: string;
  user_avatar: string;
  user_id: number;
  user_login: string;
  user_name: string;
  user_rating: number;
}

export type OfferType = {
  available: null;
  count: number;
  id: number;
  image: string;
  name: string;
  price: number;
}

export type CountsType = {
  available: null;
  count: number;
  id: number;
  sum: number;
  image: string;
  name: string;
  price: number;
}
