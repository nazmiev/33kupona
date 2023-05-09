import styles from "./LoginBlock.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { setAuth } from "../../redux/slices/authSlice";

export default function LoginBlock() {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("submit");
    dispatch(setAuth(true));
    return redirect("/");
  }
  return (
    <form className={styles.login} onSubmit={handleSubmit} action="/">
      <div className={styles.row}>
        <label htmlFor="myInput">Email:</label>
        <input
          id="myInput"
          name="myInput"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="myCheckbox">Запомнить меня? </label>
        <input
          id="myCheckbox"
          type="checkbox"
          name="myCheckbox"
          defaultChecked={true}
        />
      </div>
      <button
        type="submit"
        className={login && password ? styles.active : styles.btn}
      >
        Войти
      </button>
    </form>
  );
}
