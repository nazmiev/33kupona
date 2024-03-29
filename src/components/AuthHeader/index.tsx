import styles from "./authHeader.module.scss";
import { NavLink, useNavigate } from "react-router-dom"

export default function AuthHeader () {
  const navigate = useNavigate();

  return (
    <nav className={styles.menu}>
      <NavLink to="/auth/login/"
        className={({ isActive, isPending }) =>
          isPending ? styles.pending
            : isActive ? styles.active
              : styles.item}>
        Вход
      </NavLink>
      <NavLink to="/auth/register" className={({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : "" + styles.item
      }>Регистрация</NavLink>
      <NavLink to="/auth/forget_password" className={({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : "" + styles.item
      }>Забыли пароль?</NavLink>
      <svg
        className={styles.close}
        onClick={() => { navigate('/') }}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </nav>
  );
};
