import { useLocation } from "react-router-dom";
import OrdersBlock from "../components/OrdersBlock";

export default function Orders() {
  const { state } = useLocation();
  const { invoice } = state;
  return <OrdersBlock invoice={ invoice }/>;
}
