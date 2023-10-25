import styles from "./PayModal.module.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppStore } from "../../context/AppStoreProvider";
import OffersList from "../OffersList";
import OrdersBlock from "../OrdersBlock";
import AuthBlock from "../AuthBlock";
import { ActionType, CountsType } from "../../context/types";

interface PayModalProps {
  action: ActionType;
  openPayModal: boolean;
  setOpenPayModal: Dispatch<SetStateAction<boolean>>;
}

export default function PayModal({ action, openPayModal, setOpenPayModal }: PayModalProps) {
  const { user } = useAppStore();
  const [step, setStep] = useState(1);
  const [counts, setCounts] = useState<CountsType | never[]>([]);

  const step1success = (result: any) => {
    setCounts(result);
    if (user) {
      setStep(3);
    } else {
      setStep(2);
    }
  }

  const step2success = () => {
    setStep(3);
  }

  return (
    <section className={`pay_backdrop ${styles.pay_backdrop}`} onClick={() => setOpenPayModal(false)}>
      <article className={styles.pay_modal} onClick={(e) => e.stopPropagation()}>
        <div className={`offers__container ${styles.offers}`}>
          <div className={styles.header}>
            <p>Предложения</p>
            <svg
              className={styles.close}
              onClick={() => { setOpenPayModal(false) }}
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
            <div className={step === 1 ? `${styles.active} ${styles.step}` : styles.step}>Купоны</div>
            {!user && <div className={step === 2 ? `${styles.active} ${styles.step}` : styles.step}>Вход</div>}
            <div className={step === 3 ? `${styles.active} ${styles.step}` : styles.step}>Оплата</div>
            <div className={styles.step}>Готово!</div>
          </div>
          {step === 1 && <OffersList action_id={action.id} onSuccess={step1success} />}
          {step === 2 && <AuthBlock onSuccess={step2success} />}
          {step === 3 && <OrdersBlock counts={counts} />}
        </div>
      </article>
    </section>
  );
}
