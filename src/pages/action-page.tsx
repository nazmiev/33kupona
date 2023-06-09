import styles from "./action-page.module.scss";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function ActionPage(action: any) {
  return (
    <>
      <div className={`action__container ${styles.offerTop}`}>
        <img src={action.action.imageUrl || null} />
        <div className={styles.offerTop_description}>
          <h1>{action.action.title}</h1>
          <div className={styles.offerTop__details}>
            <div className={styles.offerPrice}>cкидка 50% = 50р.</div>
            <div className={styles.offerStatAndBuy}>
              <div className={styles.offerStat}>
                <div className={styles.offerDeadline}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>
                  <p>Осталось 14 дней</p>
                </div>
                <div className={styles.offerSold}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                  </svg>
                  <p>Куплено: 13 купонов</p>
                </div>
                <div className={styles.offerComment}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  </svg>
                  <Link to="/">Отзывы</Link>
                </div>
              </div>
              <NavLink to={`/pay/${action.action.id}`}>
                <button>Купить</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={`offerNav__container ${styles.offerNav}`}>
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
          end
        >
          Об акции
        </NavLink>
        <NavLink
          to={`comments`}
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          Отзывы (?)
        </NavLink>
        <div className={styles.spinner} />
      </div>
      <Outlet />
    </>
  );
}
