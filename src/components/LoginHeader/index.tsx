import styles from "./authHeader.module.scss";
import { NavLink } from "react-router-dom"

const LoginHeader = () => {

  return (
    <nav className={styles.menu}>
      <NavLink to="/login/auth" 
        className={({ isActive, isPending }) =>
        isPending ? styles.pending
        : isActive ? styles.active 
        : styles.item}>
          Вход
      </NavLink>
      <NavLink to="/login/register" className={({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : "" + styles.item
      }>Регистрация</NavLink>
      <NavLink to="/login/forget_password" className={({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : "" + styles.item
      }>Забыли пароль?</NavLink>
    </nav>
  );
};

export default LoginHeader;
