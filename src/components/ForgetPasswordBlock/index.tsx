import styles from "./ForgetPasswordBlock.module.scss";
import { useState } from "react";

export default function ForgetPasswordBlock({ onSuccess }: any) {
  const [login, setLogin] = useState("");

  function handleForgetPasswordBlockSubmit(e: any) {
    e.preventDefault();
    console.log('login: ', login);
    // (async () => {
    //   const json = await postRegister(login, password, true);
    //   if (json.success) {
    //     (async () => {
    //       await getUser().then(user => {
    //         if (user.success) {
    //           onSuccess();
    //         }
    //       });
    //     })();
    //   }
    // })();
  }


  return (
    <form className={styles.register} onSubmit={handleForgetPasswordBlockSubmit} action="/">
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
      <button disabled={!login} type="submit">
        Прислать пароль
      </button>
    </form>
  );
}
