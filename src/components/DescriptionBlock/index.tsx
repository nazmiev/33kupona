import styles from "./DescriptionBlock.module.scss";

export default function DescriptionBlock(action: any) {
  return (
    <div className={`description__container ${styles.description}`}>
      <h2>Условия</h2>
      <h2>Подробнее об акции</h2>
      <h2>Контакты</h2>
      <h2>Дополнительно</h2>
    </div>
  );
}
