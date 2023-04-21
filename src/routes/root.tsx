import Header from "../components/Header";
import Footer from "../components/Footer";
// import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      {/* <Categories /> */}
      <Outlet />
      <Footer />
    </>
  );
}
