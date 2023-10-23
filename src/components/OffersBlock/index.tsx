import styles from "./OffersBlock.module.scss";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { createInvoice } from "../../api";
import { useAppStore } from "../../context/AppStoreProvider";
import LoginBlock from "../AuthBlock";

export default function OffersBlock(offers: any) {
  const navigate = useNavigate();
  const { user } = useAppStore();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const initialCounters = offers.offers.map((el: any) => {
    return (el = { ...el, sum: el.price * el.count });
  });

  const [counts, setCounts] = useState(initialCounters);

  const minus = (id: number) => {
    const updatedCounts = counts.map((el: any) =>
      el.id === id ? { ...el, count: el.count - 1, sum: el.price * (el.count - 1) } : el
    );
    setCounts(updatedCounts);
  };

  const plus = (id: number) => {
    const updatedCounts = counts.map((el: any) =>
      el.id === id ? { ...el, count: el.count + 1, sum: el.price * (el.count + 1) } : el
    );
    setCounts(updatedCounts);
  };

  return (
    <>
      <div className={`offers__container ${styles.offers}`}>
        <div className={styles.header}>
          <p>Предложения</p>
          <svg
            className={styles.close}
            onClick={() => { navigate(-1) }}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className={styles.steps}>
          <div className={!authModalOpen ? `${styles.active} ${styles.step}` : styles.step}>Купоны</div>
          {!user && <div className={authModalOpen ? `${styles.active} ${styles.step}` : styles.step}>Вход</div>}
          <div className={styles.step}>Оплата</div>
          <div className={styles.step}>Готово!</div>
        </div>
        {authModalOpen && <LoginBlock />}
        {!authModalOpen && (
          <div className={styles.step1}>
            <p>Выберите необходимое количество купонов</p>

            {counts.length ? (
              <div className={styles.offersList}>
                {counts.map((offer: any) => (
                  <section key={offer.id}>
                    <div className={styles.offersListItem} >
                      <div>{offer.name}</div>
                      <div className={styles.offersListItemOrder}>
                        <div>
                          <div>{offer.price} ₽</div>
                          <div className={styles.description}>цена</div>
                        </div>
                        <div className={styles.counter}>
                          <svg
                            className={styles.active}
                            onClick={() => (offer.value > 0 ? minus(offer.id) : null)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" />
                          </svg>
                          {offer.count}
                          <svg
                            className={styles.active}
                            onClick={() => plus(offer.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                          </svg>
                        </div>
                        <div>
                          <div>{offer.sum} ₽</div>
                          <div className={styles.description}>сумма</div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </section>
                ))}
              </div>
            ) : (
              <p>
                <i>нет предложений</i>
              </p>
            )}
            <div className={styles.next}>
              <p className={styles.disclaimer}>
                Совершая покупки товаров и услуг на сайте 33 Купона я ознакомился с
                Пользовательским Соглашением, размещенным в постоянном публичном
                доступе на сайте по адресу{" "}
                <Link to="/disclaimer">33kupona.ru/disclaimer</Link> и безоговорочно
                принимаю все его условия
              </p>
              <button
                disabled={counts.reduce(function (acc: number, obj: any) { return acc + obj.sum }, 0) == 0}
                onClick={() => setAuthModalOpen(true)}
              >Продолжить</button>
            </div>
          </div>
          )}
      </div>
    </>
  );
}