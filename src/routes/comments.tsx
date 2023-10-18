import { useLoaderData } from "react-router-dom";
import { getComments } from "../api";
import ActionType from "../assets/types/ActionType";
import CommentsBlock from "../components/CommentsBlock";

export default function Comments() {
  const comments = useLoaderData() as ActionType;
  return (
    <CommentsBlock comments={comments}/>
  );
}

export async function loader({ params }: any) {
  const comments = await getComments(`${params.partner_url}/${params.action_id}`);

  if (!comments) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return comments;
}
