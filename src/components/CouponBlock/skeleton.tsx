import styles from './akciyaBlock.module.scss'
import ContentLoader from "react-content-loader";

export default function Skeleton() {
  return (
    <ContentLoader 
      className={styles.AkciyaBlock}
      speed={2}
      width={430}
      height={404}
      viewBox="0 0 430 404"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="-1" rx="0" ry="0" width="430" height="290" />
      <rect x="0" y="309" rx="0" ry="0" width="430" height="40" />
      <rect x="0" y="364" rx="0" ry="0" width="430" height="40" />
    </ContentLoader>
  );
}