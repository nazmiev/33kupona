import { useLoaderData, useNavigation } from "react-router-dom";
import { getAllActions } from "../helpers";
import AkciyaBlock from "../components/AkciyaBlock";
import Skeleton from "../components/AkciyaBlock/skeleton";
import ActionType from "../assets/types/ActionType";
import Categories from "../components/Categories";

export default function Index() {
  const navigation = useNavigation();
  const actions = useLoaderData() as ActionType[];

  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const akcii = actions.map((action: any) => (
    <AkciyaBlock key={action.id} {...action} />
  ));

  return (
    <>
      <Categories />
      <div className="main__container">
        {actions.length ? (
          navigation.state === "loading" ? (
            skeletons
          ) : (
            akcii
          )
        ) : (
          <h1>нет акций в категории</h1>
        )}
      </div>
    </>
  );
}

export async function loader() {
  const actions = await getAllActions();

  if (!actions) {
    throw new Response("", {
      status: 404,
      statusText: "Нет акций",
    });
  }
  return actions;
}
