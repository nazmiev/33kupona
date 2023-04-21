import styles from "../components/Header/header.module.scss";

export default function Login() {
  return (
    <div className="login_container">
      <div className={styles.menu}>
        <div className={styles.item}>Войти</div>
        <div className={styles.item}>Зарегистрироваться</div>
        <div className={styles.item}>Забыли пароль?</div>
      </div>
    </div>
  );
}
