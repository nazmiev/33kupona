import styles from "./DescriptionBlock.module.scss";

export default function DescriptionBlock(action: any) {
  console.log('DescriptionBlock action: ', action)
  return (
    <div className={`description__container ${styles.description}`}>
      <h2>Условия</h2>
      <p>{action.action.condition}</p>
      <h2>Подробнее об акции</h2>
      <p>{action.action.short}</p>
      <h2>Контакты</h2>
      <p>{action.action.schedule}</p>
      <p>{action.action.site}</p>
      <p>{action.action.phone}</p>
      <p><a href={action.action.address_link}>{action.action.address}</a></p>
      <h2>Дополнительно</h2>
      <p>{action.action.description}</p>
    </div>
  );
}
