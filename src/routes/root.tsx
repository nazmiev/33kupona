import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";
import { getUser } from "../helpers";
import { useContext, useEffect } from "react";
import { LoginDispatchContext } from "../LoginContext";

export default function Root() {
  const dispatch = useContext(LoginDispatchContext);

  useEffect(() => {
    (async () => {
      await getUser().then(user => {
        if (user.success) {
          dispatch({ type: "login" });
        }
      });
    })();
  }, []);


  return (
    <>
      {/* <Header /> */}
      {/* <Categories /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
