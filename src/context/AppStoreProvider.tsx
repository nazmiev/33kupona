import { useState } from "react";
import { AppStoreType, User } from "./types";
import { createContext, useContext, useEffect } from "react";

const AppStore = createContext<AppStoreType>({
  user: null,
  setUser: () => { },
});

export default function AppStoreProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

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

export const useAppStore = () => useContext(AppStore);
