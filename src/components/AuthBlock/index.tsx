import styles from "./RegisterBlock.module.scss";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getUser, postRegister } from "../../api";
import { useAppStore } from "../../context/AppStoreProvider";

export default function AuthBlock() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  let params = useLocation()
  const navigate = useNavigate();
  const { setUser } = useAppStore();

  function handleSubmit(e: any) {
    e.preventDefault();
    (async () => {
      const json = await postRegister(login, password, true);
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
        <label htmlFor="myCheckbox">Я согласен с <Link to="disclaimer">правилами</Link></label>
      </div>
      {login&&login===password && (<h4>Пароль не должен совпадать с логином</h4>)}
      <button disabled={!(login && password) || (login===password)} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}





