import { useLoaderData } from "react-router-dom";
import { getAction } from "../helpers";
import ActionType from "../assets/types/ActionType";
import CommentsBlock from "../components/CommentsBlock";

export default function Comments() {
  const action = useLoaderData() as ActionType;
  return <CommentsBlock action={action} />;
}

export async function loader({ params }: any) {
  const action = await getAction(params.action_id);

  if (!action) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return action;
}
