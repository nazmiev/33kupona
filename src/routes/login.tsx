import { Outlet } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";

export default function Login() {
  return (
    <div className="login__container">
      <LoginHeader />
      <Outlet />
    </div>
  );
}
