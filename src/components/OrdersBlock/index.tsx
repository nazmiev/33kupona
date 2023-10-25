import styles from "./OrdersBlock.module.scss";
import { createInvoice, createPayment } from "../../api";
import { useEffect, useState } from "react";
import { CountsType } from "../../context/types";

type OrdersBlockProps = {
  counts: CountsType | never[]
}

export default function OrdersBlock({ counts }: OrdersBlockProps) {
  const [orders, setOrders] = useState([]);
  const [invoiceId, setInvoiceId] = useState(0);

  useEffect(() => {
    (async () => {
      const responce = await createInvoice(counts);
      if (responce?.item?.offers) {
        setOrders(responce.item.offers);
        setInvoiceId(responce.item.id);
      }
    })();
  }, []);

  const summ = orders.reduce((acc: number, offer: any) => acc += offer.count * offer.price, 0);

  const [pressed, setPressed] = useState(false);
  const handleClick = async (e: any) => {
    if (pressed) {
      return;
    }
    setPressed(true);

    const payment = await createPayment(invoiceId);

    if (payment.success) {
      window.location.href = payment.data.url;
      return;
    }

    setPressed(false);
  };


  return (
    <div className={styles.step2}>
      <p>Ваш заказ:</p>
      {orders.map((order: any) => (
        <div className={styles.ordersList} key={order.id}>
          <p className={styles.ordersListItem}>{order.name} - {order.count} x {order.price} = {order.count * order.price}</p>
        </div>
      )
      )}
      <p>Сумма: {summ} рублей</p>
      <div className={styles.next}>
        <p className={styles.disclaimer}>
          При оплате картой используется защищенное соединение.
        </p>
        <button disabled={pressed} onClick={handleClick}>Оплатить</button>
      </div>
    </div>
  );
}
