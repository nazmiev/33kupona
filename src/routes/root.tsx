import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";
import { getUser } from "../helpers";
import { useContext, useEffect } from "react";
import { useAppStore } from "../LoginContext";


export default function Root() {
  // const dispatch = useContext(LoginDispatchContext);
  const { user, setUser } = useAppStore();
  console.log('user id: ', user);

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
    <p>The user id is {user?.id ? user.id : <></>}</p>
      {/* <Header /> */}
      {/* <Categories /> */}
      <button onClick={() => setUser({id: 2})}>set</button>
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
}
