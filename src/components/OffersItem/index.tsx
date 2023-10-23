import styles from "./OffersItem.module.scss";

interface PayModalProps {
  action: any;
  minus: Function;
  plus: Function;
}

export default function OffersItem({ offer, minus, plus }: any) {

  return (
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
              onClick={() => (offer.count > 0 ? minus(offer.id) : null)}
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
  );
}
