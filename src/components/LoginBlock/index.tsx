import styles from "./LoginBlock.module.scss";
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUser, postAuth } from "../../helpers";
// import { LoginDispatchContext } from "../../LoginContext";

export default function LoginBlock() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  let params = useLocation()
  
  // const dispatch = useContext(LoginDispatchContext);
  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    (async() => {
      const json = await postAuth(login, password, true);
      if (json.success) {
        // dispatch({type: "login"});
        params.search ? navigate(`/refine/${params.search.substring(1)}`) : navigate("/");
      }
    })();
  }
  return (
    <form className={styles.login} onSubmit={handleSubmit} action="/">
      <div className={styles.row}>
        <label htmlFor="myInput">Email:</label><br/>
        <input
          id="myInput"
          name="myInput"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="password">Пароль:</label><br/>
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
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
      </div>
      <button disabled={!(login && password)} type="submit">
        Войти
      </button>
    </form>
  );
}
