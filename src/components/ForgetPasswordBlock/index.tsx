import { Link } from "react-router-dom";
import { postForget } from "../../api";
import styles from "./ForgetPasswordBlock.module.scss";
import { useState } from "react";

type Props = { onSuccess: () => void }

export default function ForgetPasswordBlock({ onSuccess }: Props) {
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const [passSent, setPassSent] = useState(false);

  function handleForgetPasswordBlockSubmit(e: any) {
    e.preventDefault();
    (async () => {
      const json = await postForget(login);
      if (json.redirect) {
        setPassSent(true);
      }
      if (json.email) {
        setError(json.email);
      }
    })();
  }

  if (passSent) {
    return (<>
      <p>На ваш адрес электронной почты выслано письмо с инструкциями по восстановлению пароля.</p>
      <p>Если по каким-либо причинам Вы не смогли восстановить пароль самостоятельно, <Link to="https://api.whatsapp.com/send?text=%D0%9D%D0%B5%20%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D0%B8%D1%82%20%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%BE-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%B0%D1%80%D0%BE%D0%BB%D1%8F%20%D0%BD%D0%B0%2033%D0%BA%D1%83%D0%BF%D0%BE%D0%BD%D0%B0.%20%D0%9C%D0%BE%D0%B9%20%D0%BB%D0%BE%D0%B3%D0%B8%D0%BD:&phone=79138161248">напишите нам в WhatsApp.</Link></p>
    </>)
  }

  return (
    <form className={styles.register} onSubmit={handleForgetPasswordBlockSubmit} action="/">
      <div>
        <label htmlFor="myInput">Email:</label>
        <input
          autoComplete="email"
          type="email"
          id="myInput"
          name="myInput"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          onFocus={() => setError('')}
        />
      </div>
      <button disabled={!login} type="submit">
        Прислать пароль
      </button>
      {error && (
        <p><br />Такого пользователя у нас нет.<br /><br />
          Пройдите <Link to="/auth/register">регистрацию</Link><br /><br />
          или <Link target="_blank" to="https://api.whatsapp.com/send?text=%D0%9D%D0%B5%20%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D0%B8%D1%82%20%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%BE-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%B0%D1%80%D0%BE%D0%BB%D1%8F%20%D0%BD%D0%B0%2033%D0%BA%D1%83%D0%BF%D0%BE%D0%BD%D0%B0.%20%D0%9C%D0%BE%D0%B9%20%D0%BB%D0%BE%D0%B3%D0%B8%D0%BD:&phone=79138161248">напишите нам в WhatsApp</Link>
        </p>)}
    </form>
  );
}
