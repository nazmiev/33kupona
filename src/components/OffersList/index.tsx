import { Link } from "react-router-dom";
import styles from "./OffersList.module.scss";
import { useEffect, useState } from "react";
import { getOffers } from "../../api";
import OffersItem from "../OffersItem";
import { CountsType } from "../../context/types";

type OffersListProps = { 
  action_id: number;
  onSuccess: (result: any) => void;
}

export default function OffersList({ action_id, onSuccess }: OffersListProps) {
  const [offers, setOffers] = useState([]);

  const initialCounters = offers.map((el: CountsType) => {
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
    const updatedCounts = counts.map((el: CountsType) =>
      el.id === id ? { ...el, count: el.count - 1, sum: el.price * (el.count - 1) } : el
    );
    setCounts(updatedCounts);
  };

  const plus = (id: number) => {
    const updatedCounts = counts.map((el: CountsType) =>
      el.id === id ? { ...el, count: el.count + 1, sum: el.price * (el.count + 1) } : el
    );
    setCounts(updatedCounts);
  };

  const handleClick = () => {
    onSuccess(counts);
  };

  return (
    <div className={styles.step1}>
      {counts.length ? (
        <div className={styles.offersList}>
          {counts.map((offer: CountsType) => (
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
          доступе на сайте по адресу <Link to="/agreement">33kupona.ru/agreement</Link> и безоговорочно
          принимаю все его условия
        </p>
        <button
          disabled={counts.reduce(function (acc: number, obj: CountsType) { return acc + obj.sum }, 0) == 0}
          onClick={handleClick}
        >Продолжить</button>
      </div>
    </div>
  );
}
