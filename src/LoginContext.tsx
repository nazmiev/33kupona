import { createContext, useContext, useEffect } from "react";

type ThemeType = "light" | "dark";
type User = {}

type AppStoreType = {
  // user: User | null;
  theme: ThemeType;
  setTheme: Function;
}

const AppStore = createContext<AppStoreType>({
  // user: null,
  theme: "light",
  setTheme: () => {},
});

export const useAppStore = () => useContext(AppStore);

import { useState } from "react";

export default function AppStoreProvider ({children}: any) {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    //loadUser, setUser
  });

  const value = {
    // user,
    theme,
    setTheme,
  }

  return (
    <AppStore.Provider value={value}>
      {children}
    </AppStore.Provider>
  );
};

// import { createContext, useContext, useReducer, type Dispatch } from 'react';

// export const LoginContext = createContext(false);

// export type action =
//   | { type: "login"; }
//   | { type: "logout"; };

// export const LoginDispatchContext = createContext<any>(null);

// export function LoginProvider({ children }:any) {
//   const [logged, dispatch] = useReducer(
//     loginReducer,
//     initialLoginState
//   );

//   return (
//     <LoginContext.Provider value={logged}>
//       <LoginDispatchContext.Provider value={dispatch}>
//         {children}
//       </LoginDispatchContext.Provider>
//     </LoginContext.Provider>
//   );
// }

// export function useLogin() {
//   return useContext(LoginContext);
// }

// export function useLoginDispatch() {
//   return useContext(LoginDispatchContext);
// }

// function loginReducer(logged: boolean, action: any) {
//   switch (action.type) {
//     case 'login': {
//       return true;
//     }
//     case 'logout': {
//       return false;
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// const initialLoginState = false;