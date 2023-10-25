import AuthHeader from "../components/AuthHeader";
import LoginBlock from "../components/LoginBlock";
import RegisterBlock from "../components/RegisterBlock";
import styles from "../components/AuthBlock/AuthBlock.module.scss";
import ForgetPasswordBlock from "../components/ForgetPasswordBlock";
import { useNavigate } from "react-router-dom";

export default function Auth({ authType }: {authType: string}) {
  console.log('authType: ', authType);
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate('/')
  }
  return (
    <div className="login__container">
      <AuthHeader/>
      {authType === 'login' && (
        <section className={styles.auth}>
          <LoginBlock onSuccess={onSuccess} />
        </section>)
      }
      {authType === 'register' && (
        <section className={styles.auth}>
          <RegisterBlock onSuccess={onSuccess} />
        </section>)
      }
      {authType === 'forget_password' && (
        <section className={styles.auth}>
          <ForgetPasswordBlock onSuccess={onSuccess} />
        </section>)
      }
    </div>
  );
}
