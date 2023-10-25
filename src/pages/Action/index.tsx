import styles from "./action-page.module.scss";
import { pluralizeRus, secondsToDh } from "../../utils";
import { NavLink, ScrollRestoration } from "react-router-dom";
import Categories from "../../components/Categories";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import PayModal from "../../components/PayModal";
import { useParams } from "react-router-dom";
import { useAppStore } from "../../context/AppStoreProvider";
import CommentsBlock from "../../components/CommentsBlock";
import DescriptionBlock from "../../components/DescriptionBlock";
import { CommentType } from "../../context/types";

type ActionPageProps = {
  comment: boolean
}

export default function ActionPage({ comment }: ActionPageProps) {
  const [openPayModal, setOpenPayModal] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const { actions } = useAppStore();
  const {action_id} = useParams();
  const action = actions.find(a => action_id == '' + a.id );

  useEffect(() => {
    if (comment) {setCommentsOpen(true)}
  },[])

  if (!action) return <h1>Loading</h1>

  return (
    <>
      <Header />
      <Categories />
      <ScrollRestoration />
      {action && (<>
      <div className={`action__container ${styles.offerTop}`}>
        <img src={action.image_big} alt={action.name} />
        <div className={styles.offerTop_description}>
          <h1>{action.name}</h1>
          <div className={styles.offerTop__details}>
            <div className={styles.offerPrice}>cкидка {action.discount}% = {action.coupon_price}р.</div>
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
                  <p>Закончится через {secondsToDh(action.left)}</p>
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
                  <p>Куплено: {action.coupon_sold} {pluralizeRus(action.coupon_sold, 'купон', 'купона', 'купонов')}</p>
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
                  <NavLink
                    to={`comment`}
                    className={({ isActive, isPending }) =>
                      isPending ? styles.pending : isActive ? styles.active : ""
                    }
                  >Отзывы ({action.comment_count ? action.comment_count : 0})</NavLink>
                </div>
              </div>
              <button onClick={() => setOpenPayModal(true)}>Купить</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`offerNav__container ${styles.offerNav}`}>
        <button 
          onClick={() => setCommentsOpen(false)}
          className={!commentsOpen ? styles.active : ''}>
          Об акции
        </button>
        <button 
          onClick={() => setCommentsOpen(true)}
          className={commentsOpen ? styles.active : ''}>
          Отзывы ({action.comment_count ? action.comment_count : 0})
        </button>
        <div className={styles.spinner} />
      </div> 
      </>)}
      {!commentsOpen && <DescriptionBlock action={action} />}
      {commentsOpen && <CommentsBlock />}
      <Footer />
      {openPayModal && <PayModal action={action} setOpenPayModal={setOpenPayModal}/>}
    </>
  );
}
