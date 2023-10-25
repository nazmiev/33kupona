import { useState } from "react";
import { ActionType, AppStoreType, CategoryType, User } from "./types";
import { createContext, useContext } from "react";

const AppStore = createContext<AppStoreType>({
  user: null,
  setUser: () => { },
  actions: [],  
  setActions: () => { },
  categories: [],  
  setCategories: () => { },
  loading: true,
  setLoading: () => { },
});

export default function AppStoreProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [actions, setActions] = useState<ActionType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const value = {
    user,
    setUser,
    actions,
    setActions,
    categories,
    setCategories,
    loading,
    setLoading
  }

  return (
    <AppStore.Provider value={value}>
      {children}
    </AppStore.Provider>
  );
};

export const useAppStore = () => useContext(AppStore);
