import { pluralizeRus, secondsToDh } from "../../helpers";
import styles from "./akciyaBlock.module.scss";
import { Link } from "react-router-dom";

type AkciyaBlockProps = {
  title: string,
  image_big: string,
  url: string,
  coupon_sold: string,
  comment_count: number,
  discount: number,
  left: number,
}

function AkciyaBlock({ title, image_big, url, coupon_sold, comment_count, discount, left }: AkciyaBlockProps) {
  return (
    <section className={styles.AkciyaBlock}>
      <div className={styles.imgContainer}>
        <Link to={url}>
          <img src={image_big} alt={title} />
        </Link>
        <div className={styles.greenLabel}>
          <span>{discount}%</span>
        </div>
      </div>
      <Link to={url}>
        <h3>{title}</h3>
      </Link>
      <div className={styles.details}>
        <div className={styles.info}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
            </svg>
            Закончится через {secondsToDh(left)}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            Купили {coupon_sold} {pluralizeRus(coupon_sold, 'купон', 'купона', 'купонов')}
          </div>
        </div>
        <div className={styles.comments}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#696969"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          </svg>
          <span className={styles.counter}>{comment_count}</span>
        </div>
      </div>
    </section>
  );
}

export default AkciyaBlock;
