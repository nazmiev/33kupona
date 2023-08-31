import { useLoaderData } from "react-router-dom";
import { getAction } from "../helpers";
import ActionType from "../assets/types/ActionType";
import DescriptionBlock from "../components/DescriptionBlock";

export default function Description() {
  const action = useLoaderData() as ActionType;
  return <DescriptionBlock action={action} />;
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
