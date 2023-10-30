import styles from "./RegisterBlock.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser, postRegister } from "../../api";
import { useAppStore } from "../../context/AppStoreProvider";

type Props = { onSuccess: () => void }

export default function RegisterBlock({ onSuccess }: Props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const { setUser } = useAppStore();

  function handleRegisterSubmit(e: any) {
    e.preventDefault();
    (async () => {
      const json = await postRegister(login, password, true);
      if (json.success) {
        (async () => {
          await getUser().then(user => {
            if (user.success) {
              setUser(user.success);
              onSuccess();
            }
          });
        })();
      }
    })();
  }


  return (
    <form className={styles.register} onSubmit={handleRegisterSubmit} action="/">
      <div>
        <label htmlFor="myInput">Email:</label>
        <input
          type="email"
          id="myInput"
          name="myInput"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small>от 4 до 20 символов: A-z, 0-9, !@#$%^&*()_-+</small>
      </div>
      <div className={styles.row}>
        <input
          id="myCheckbox"
          type="checkbox"
          name="myCheckbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label htmlFor="myCheckbox">Я согласен с <Link to="/agreement">правилами</Link></label>
      </div>
      {login && login === password && (<h4>Пароль не должен совпадать с логином</h4>)}
      <button disabled={!(login && password) || (login === password)} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}
