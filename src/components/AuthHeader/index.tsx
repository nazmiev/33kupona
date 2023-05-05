import styles from "./authHeader.module.scss";
import { NavLink } from "react-router-dom"

const AuthHeader = () => {

  return (
    <nav className={styles.menu}>
      <NavLink to="/login" 
        className={({ isActive, isPending }) =>
        isPending ? styles.pending
        : isActive ? styles.active 
        : styles.item}>
          Вход
      </NavLink>
      <NavLink to="/register" className={({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : "" + styles.item
      }>Регистрация</NavLink>
      <NavLink to="/forgot_password" className={({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : "" + styles.item
      }>Забыли пароль?</NavLink>
    </nav>
  );
};

export default AuthHeader;
