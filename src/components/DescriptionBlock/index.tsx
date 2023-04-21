import styles from "./DescriptionBlock.module.scss";

export default function DescriptionBlock(action: any) {
  return (
    <div className={`description__container ${styles.description}`}>
      описание
    </div>
  );
}
