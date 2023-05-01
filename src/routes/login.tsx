import AuthHeader from "../components/AuthHeader";
import LoginBlock from "../components/LoginBlock";

export default function Login() {
  return (
    <div className="login__container">
      <AuthHeader />
      <LoginBlock />
    </div>
  );
}
