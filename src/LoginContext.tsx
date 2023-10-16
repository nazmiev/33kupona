import { createContext, useContext, useEffect } from "react";

type User = {
  id: number;
  confirmed: number
  email: string;
  medicine: number;
  phone: string;
}

type AppStoreType = {
  user: User | null;
  setUser: Function;
}

const AppStore = createContext<AppStoreType>({
  user: null,
  setUser: () => { },
});

export const useAppStore = () => useContext(AppStore);

import { useState } from "react";

export default function AppStoreProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
  });

  const value = {
    user,
    setUser,
  }

  return (
    <AppStore.Provider value={value}>
      {children}
    </AppStore.Provider>
  );
};
