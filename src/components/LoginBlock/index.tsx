import styles from "./LoginBlock.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginBlock() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // fetch("https://33kupona.ru/api", { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());
  }
  return (
    <form className={styles.login} method="post" onSubmit={handleSubmit}>
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
      <Link
        className={login && password ? styles.active : styles.btn}
        to={login && password ? "/" : "#"}
      >
        Войти
      </Link>
    </form>
  );
}
