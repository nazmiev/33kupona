import Comment from "./Comment";
import styles from "./CommentsBlock.module.scss";

export default function CommentsBlock({ comments, depth }: any) {
  console.log('comments: ', comments);
  return (
    <>
      <div>
        {/* <CommentForm /> */}
        <div className={styles.comments}>
          {comments.map((comment: any) => <Comment key={comment.id} comment={comment} depth={0} />)}
        </div>
      </div>
    </>
  );
}
