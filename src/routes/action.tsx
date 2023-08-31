import { useLoaderData } from "react-router-dom";
import { getAction } from "../helpers";
import ActionType from "../assets/types/ActionType";
import ActionPage from "../pages/action-page";

export default function Action() {
  const action = useLoaderData() as ActionType;
  return <ActionPage action={action} />;
}

export async function loader({ params }: any) {
  console.log('Action loader params: ', params);
  const action = await getAction(`${params.partner_url}/${params.action_id}`);

  console.log('action: ', action);

  if (!action) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return action;
}
