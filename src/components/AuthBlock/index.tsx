import styles from "./AuthBlock.module.scss";
import { useState } from "react";
import LoginBlock from "../LoginBlock";
import RegisterBlock from "../RegisterBlock";

export default function AuthBlock({ onSuccess }: any) {
  const [authType, setAuthType] = useState('login');

  return (
    <>
      {authType === 'login' && (
        <section className={styles.auth}>
          <LoginBlock onSuccess={onSuccess} />
          <button className={styles.switch} type="button" onClick={() => setAuthType('register')}>
            или зарегистрируйтесь
          </button>
        </section>)
      }
      {authType === 'register' && (
        <section className={styles.auth}>
          <RegisterBlock onSuccess={onSuccess} />
          <button className={styles.switch} type="button" onClick={() => setAuthType('login')}>
            Есть аккаунт? Залогиниться
          </button>
        </section>)
      }
    </>
  );
}
