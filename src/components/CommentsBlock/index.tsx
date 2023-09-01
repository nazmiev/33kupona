import styles from "./CommentsBlock.module.scss";

export default function CommentsBlock({comment, depth}: any) {
  console.log('CommentsBlock comment: ', comment);
  return (
    <>
    <div className={styles.comment}>[{depth}] {comment.user_name} @{comment.user_id}
      {comment.published && (<p>{comment.html}</p>)}
      {comment.comments.length && (
      <div className={styles.children}>
        {comment.comments.map((comment:any) => <CommentsBlock key={comment.id} comment={comment} depth={1 + depth} />)}
      </div>
      )}
    </div>
    </>
  );
}
