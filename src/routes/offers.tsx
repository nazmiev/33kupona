import { useLoaderData } from "react-router-dom";
import { getOffers } from "../helpers";
import ActionType from "../assets/types/ActionType";
import OffersBlock from "../components/OffersBlock";

export default function Offers() {
  const offers = useLoaderData() as ActionType;
  return <OffersBlock offers={offers} />;
}

export async function loader({ params }: any) {
  const action = await getOffers(params.action_id);

  if (!action) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return action;
}
