import styles from "./LoginBlock.module.scss";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUser, postAuth } from "../../api";
import { useAppStore } from "../../context/AppStoreProvider";

export default function LoginBlock() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  let params = useLocation()
  const navigate = useNavigate();
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
            }
          });
        })();
        params.search ? navigate(`/refine/${params.search.substring(1)}`) : navigate("/");
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
