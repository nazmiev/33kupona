import styles from "./OrdersBlock.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../context/AppStoreProvider";
import { createPayment } from "../../api";
import { useState } from "react";

export default function OrdersBlock({ invoice }: any) {
  const navigate = useNavigate();
  const { user } = useAppStore();

  const offers = invoice.item.offers.map((offer: any) => (
    <div className={styles.ordersList} key={offer.id}>
      <p className={styles.ordersListItem}>{offer.name} - {offer.count} x {offer.price} = {offer.count * offer.price}</p>
    </div>
  )
  )

  const summ = invoice.item.offers.reduce((acc: number, offer: any) => acc += offer.count * offer.price, 0);

  const [pressed, setPressed] = useState(false);
  const handleClick = async (e: any) => {
    if (pressed) {
      return;
    }
    setPressed(true);

    const payment = await createPayment(invoice.item.id);

    if (payment.success) {
      window.location.href = payment.data.url;
      return;
    }

    setPressed(false);
  };


  return (
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
        <div className={styles.step}>Купоны</div>
        {!user && <div className={styles.step}>Вход</div>}
        <div className={`${styles.active} ${styles.step}`}>Оплата</div>
        <div className={styles.step}>Готово!</div>
      </div>
      <div className={styles.step2}>
        <p>Ваш заказ:</p>
        {offers}
        <p>Сумма: {summ} рублей</p>
        <div className={styles.next}>
          <p className={styles.disclaimer}>
            При оплате картой используется защищенное соединение.
          </p>
          <button disabled={pressed} onClick={handleClick}>Оплатить</button>
        </div>
      </div>
    </div>
  );
}
