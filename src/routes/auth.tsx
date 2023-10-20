import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

export default function Auth() {
  return (
    <div className="login__container">
      <AuthHeader />
      <Outlet />
    </div>
  );
}
