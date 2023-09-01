import { useLoaderData } from "react-router-dom";
import { getAction, getComments } from "../helpers";
import ActionType from "../assets/types/ActionType";
import CommentsBlock from "../components/CommentsBlock";
import styles from "../components/CommentsBlock/CommentsBlock.module.scss";

export default function Comments() {
  const comments = useLoaderData() as any;
  return (<div>
    {/* <CommentForm /> */}
    <div className={styles.comments}>
      {comments.map((comment:any) => <CommentsBlock key={comment.id} comment={comment} depth={0} />)}
    </div>
  </div>
  );
}

export async function loader({ params }: any) {
  const comments = await getComments(`${params.partner_url}/${params.action_id}`);
  console.log('loader comments: ', comments);
  

  if (!comments) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return comments;
}
