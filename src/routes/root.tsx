import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";
import { getUser } from "../helpers";
import { useContext, useEffect } from "react";
import { useAppStore } from "../LoginContext";


export default function Root() {
  // const dispatch = useContext(LoginDispatchContext);
  const { theme, setTheme } = useAppStore();
  console.log('theme: ', theme);

  // useEffect(() => {
  //   (async () => {
  //     await getUser().then(user => {
  //       if (user.success) {
  //         dispatch({ type: "login" });
  //       }
  //     });
  //   })();
  // }, []);

  return (
    <>
    <p>The current theme is {theme}</p>
      {/* <Header /> */}
      {/* <Categories /> */}
      <button onClick={() => setTheme('dark')}>set</button>
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
}
