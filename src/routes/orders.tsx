import { useLoaderData, useLocation } from "react-router-dom";
import { createInvoice } from "../helpers";
import OrdersBlock from "../components/OrdersBlock";

export default function Orders() {
  const { state } = useLocation();
  console.log('Orders state: ', state);
  // const invoice = useLoaderData();
  const invoice = createInvoice(state);
  [ invoice, setInvoice ] 
  return <OrdersBlock invoice={invoice}/>;
}

// export async function loader(state1: any) {
//   // const { state } = useLocation();
//   // console.log('loader state: ', state);
//   const invoice = await createInvoice(state1);
//   // if (!action) {
//   //   throw new Response("", {
//   //     status: 404,
//   //     statusText: "Not Found",
//   //   });
//   // }
//   // return action;
//   return invoice;
// }
