import { useState } from "react";
import styles from "./authHeader.module.scss";

const AuthHeader = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div className={styles.menu}>
      <div className={styles.item}>Войти</div>
      <div className={styles.item}>Зарегистрироваться</div>
      <div className={styles.item}>Забыли пароль?</div>
    </div>
  );
};

export default AuthHeader;
