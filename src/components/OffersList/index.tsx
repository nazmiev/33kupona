import { Link } from "react-router-dom";
import styles from "./OffersList.module.scss";
import { useEffect, useState } from "react";
import { getOffers } from "../../api";
import OffersItem from "../OffersItem";

export default function OffersList({ action_id, onSuccess }: any) {
  const [offers, setOffers] = useState([]);

  const initialCounters = offers.map((el: any) => {
    return (el = { ...el, sum: el.price * el.count });
  });
  const [counts, setCounts] = useState(initialCounters);

  useEffect(() => {
    (async () => {
      await getOffers(action_id).then((responce: any) => {
        setOffers(responce);
        setCounts(responce);
      })
    })();
  }, [])

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

  const handleClick = () => {
    onSuccess(counts);
  };

  return (
    <div className={styles.step1}>
      <p>Выберите необходимое количество купонов</p>
      {counts.length ? (
        <div className={styles.offersList}>
          {counts.map((offer: any) => (
            < OffersItem key={offer.id} offer={offer} minus={minus} plus={plus} />
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
          доступе на сайте по адресу
          <Link to="/disclaimer">33kupona.ru/disclaimer</Link> и безоговорочно
          принимаю все его условия
        </p>
        <button
          disabled={counts.reduce(function (acc: number, obj: any) { return acc + obj.sum }, 0) == 0}
          onClick={handleClick}
        >Продолжить</button>
      </div>
    </div>
  );
}
