import styles from "./Comment.module.scss";

export default function Comment({ comment, depth }: any) {
  const commentNoAvatarColors = ['#DD48A2','#4785DC','#EFD428','#1DBB2F','#3A3A3A'];

  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        {comment.user_avatar ? (
          <img src={`https://dn.33kupona.ru/img/avatar/small/${comment.user_avatar}`} alt={`аватарка пользователя ${comment.user_name}`}/>
        ) : (<div className={styles.avatar} style={{backgroundColor:commentNoAvatarColors[comment.user_id%commentNoAvatarColors.length]}}>{comment.user_name[0].toUpperCase()}</div>)}
        <div className={styles.info}>
          <p><b>{comment.user_name}</b> @{comment.user_id}</p>
          <p> 
            {new Date(comment.date_created*1000).toLocaleDateString("ru-RU")}<> </>
            {new Date(comment.date_created*1000).toLocaleTimeString("ru-RU")}
          </p>
        </div>
      </div>

      {comment.published ? (<p>{comment.html}</p>) : <p className={styles.deleted}>Комментарий удалён</p>}
      <section className={styles.controls}>
        <button>Ответить</button>
        <button>Удалить</button>
        <span>+</span>
        <span className={comment.rating < 0 ? styles.negative : ''}>{comment.rating}</span>
        <span>-</span>
      </section>

      {comment.comments.length ? (
        <div className={styles.children}>
          {comment.comments.map((comment: any) => <Comment key={comment.id} comment={comment} depth={1 + depth} />)}
        </div>
      ): <></>}
    </div>
  );
}
