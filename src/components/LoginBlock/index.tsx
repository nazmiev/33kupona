import styles from "./LoginBlock.module.scss";
import { useState } from "react";
import { getUser, postAuth, postRegister } from "../../api";
import { useAppStore } from "../../context/AppStoreProvider";

type Props = { onSuccess: () => void }

export default function LoginBlock({ onSuccess }: Props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const { setUser } = useAppStore();

  function handleSubmit(e: any) {
    e.preventDefault();
    (async () => {
      const json = await postAuth(login, password, true);
      if (json.success) {
        (async () => {
          await getUser().then(user => {
            if (user.success) {
              setUser(user.success)
              onSuccess();
            }
          });
        })();
      }
    })();
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit} action="/">
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
        <label htmlFor="password">Пароль:</label><br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <input
          id="myCheckbox"
          type="checkbox"
          name="myCheckbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label htmlFor="myCheckbox">Запомнить меня? </label>
      </div>
      <button disabled={!(login && password)} type="submit">
        Войти
      </button>
    </form>
  );
}
