import { useEffect, useState } from "react";
import Comment from "./Comment";
import styles from "./CommentsBlock.module.scss";
import { getComments } from "../../api";
import { useParams } from "react-router-dom";

export default function CommentsBlock() {
  const [comments, setComments] = useState([]);
  const {partner_url, action_id} = useParams();

  useEffect(() => {
    (async () => {
      await getComments(`${partner_url}/${action_id}`)
      .then((response) => {setComments(response)})})();
  }, []);
   
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
