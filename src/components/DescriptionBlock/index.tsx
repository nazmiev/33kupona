import styles from "./DescriptionBlock.module.scss";

export default function DescriptionBlock({action}: any) {
  return (
    <div className={`description__container ${styles.description}`}>
      <h2>Условия</h2>
      <p>{action.condition}</p>
      <h2>Подробнее об акции</h2>
      <p>{action.short}</p>
      <h2>Контакты</h2>
      <p>{action.schedule}</p>
      <p>{action.site}</p>
      <p>{action.phone}</p>
      <p><a href={action.address_link}>{action.address}</a></p>
      <h2>Дополнительно</h2>
      <p>{action.description}</p>
    </div>
  );
}
