import styles from "./CommentsBlock.module.scss";

export default function CommentsBlock(action: any) {
  return (
    <div className={`comments__container ${styles.comments}`}>комменты</div>
  );
}
