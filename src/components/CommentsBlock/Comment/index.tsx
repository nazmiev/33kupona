import styles from "./Comment.module.scss";

export default function Comment({comment, depth}: any) {
  return (
    <div className={styles.comment}>[{depth}] {comment.user_name} @{comment.user_id}
      {comment.published && (<p>{comment.html}</p>)}
      {comment.comments.length && (
      <div className={styles.children}>
        {comment.comments.map((comment:any) => <Comment key={comment.id} comment={comment} depth={1 + depth} />)}
      </div>
      )}
    </div>
  );
}
