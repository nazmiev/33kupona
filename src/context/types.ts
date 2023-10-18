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
}