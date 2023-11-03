import styles from "./couponBlock.module.scss";

type CouponBlockProps = {
  activator_ip: string;
  code: string;
  date_activate: string;
  date_created: string;
  id: string;
  invoice_id: string;
  offer_id: string;
  price: string;
  state: string;
  user_id: string;
}

function CouponBlock({ activator_ip, code, date_activate, date_created, id, invoice_id, offer_id, price, state, user_id }: CouponBlockProps) {

  return (
    <section className={styles.CouponBlock}>
      <div className={styles.couponActionTitle}>
        <a href="/tomsk/laserlove/8128">
          Первый сеанс лазерной эпиляции со скидкой от 50% в клинике аппаратной косметологии «Laser Love»
        </a>
      </div>
      <div className={styles.couponOfferTitle}>
        Скидка 50% на представленные услуги
      </div>
      <div className={styles.couponDetails}>
        <div className={styles.couponDate}>
          Действует до
          <br />
          9 ноября 2023
        </div>
        <div className={styles.couponCode}>
          {code.toUpperCase()}
        </div>
        <div className={styles.couponStatus}>
          <a className={styles.button} href="?print=324423" target="_blank" title="Распечатать купон">
            Напечатать
          </a>
        </div>
      </div>

    </section>
  );
}

export default CouponBlock;
