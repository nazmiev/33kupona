import styles from "./Comment.module.scss";

export default function Comment({ comment, depth }: any) {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        {comment.user_avatar && (
          <img src={`https://dn.33kupona.ru/img/avatar/small/${comment.user_avatar}`} alt={`аватарка пользователя ${comment.user_name}`}/>
        )}
        <div className={styles.info}>
          <p><b>{comment.user_name}</b> @{comment.user_id} [{depth}] </p>
          <p> 
            {new Date(comment.date_created*1000).toLocaleDateString("ru-RU")}<> </>
            {new Date(comment.date_created*1000).toLocaleTimeString("ru-RU")}
          </p>
        </div>
      </div>

      {comment.published&&(<p>{comment.html}</p>)}
      {comment.comments.length&&(
        <div className={styles.children}>
          {comment.comments.map((comment: any) => <Comment key={comment.id} comment={comment} depth={1 + depth} />)}
        </div>
      )}
    </div>
  );
}
