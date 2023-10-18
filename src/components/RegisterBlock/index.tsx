import styles from "./RegisterBlock.module.scss";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getUser, postAuth } from "../../api";
import { useAppStore } from "../../context/AppStoreProvider";

export default function RegisterBlock() {
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
    <><h1>Регистрация</h1>
      <form className={styles.login} onSubmit={handleSubmit} action="/">
        <div className={styles.row}>
          <label htmlFor="myInput">Email:</label><br />
          <input
            id="myInput"
            name="myInput"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Пароль:</label><br />
          <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span>Пароль должен содержать от 4 до 20 символов из списка: A-z, 0-9, ! @ # $ % ^ & * ( ) _ - + и не может совпадать с логином.</span>
        <div className={styles.row}>
          <label htmlFor="myCheckbox">Я согласен с <Link to="disclaimer">правилами использования ресурса</Link></label>
          <input
            id="myCheckbox"
            type="checkbox"
            name="myCheckbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        </div>
        <button disabled={!(login && password)} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}





