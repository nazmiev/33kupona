import ActionType from "../assets/types/ActionType";

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