import { ActionType } from "../../context/types";
import styles from "./DescriptionBlock.module.scss";

type Props = {
  action: ActionType;
}

export default function DescriptionBlock({ action }: Props) {
  if (!action) return <h1>Loading</h1>
  return (
    <div className={`description__container ${styles.description}`}>
      <article>
        <h2>Условия</h2>
        <div dangerouslySetInnerHTML={{ __html: action.condition }} />
        <h2>Подробнее об акции</h2>
        <div dangerouslySetInnerHTML={{ __html: action.short }} />
        <h2>Контакты</h2>
        <p>{action.schedule}</p>
        <p>{action.site}</p>
        <p>{action.phone}</p>
        <p><a href={action.address_link}>{action.address}</a></p>
      </article>
      <div dangerouslySetInnerHTML={{ __html: action.description }} />
    </div>
  );
}
