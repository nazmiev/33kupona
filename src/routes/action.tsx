import { useLoaderData } from "react-router-dom";
import { getAction } from "../api";
import ActionType from "../assets/types/ActionType";
import ActionPage from "../pages/Action";

export default function Action() {
  const action = useLoaderData() as ActionType;
  return <ActionPage action={action} />;
}

export async function loader({ params }: any) {
  const action = await getAction(`${params.partner_url}/${params.action_id}`);

  if (!action) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return action;
}
