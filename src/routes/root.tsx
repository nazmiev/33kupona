import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";
import { getUser } from "../helpers";
import { useEffect } from "react";
import { useAppStore } from "../LoginContext";


export default function Root() {
  const { user, setUser } = useAppStore();

  useEffect(() => {
    (async () => {
      await getUser().then(user => {
        if (user.success) {
          setUser(user.success)
        }
      });
    })();
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <Categories /> */}
      <Outlet />
      <Footer />
    </>
  );
}
