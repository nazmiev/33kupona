import { useLoaderData, useNavigation } from "react-router-dom";
import { getAllActions, getCategoryActions } from "../helpers";
import AkciyaBlock from "../components/AkciyaBlock";
import Skeleton from "../components/AkciyaBlock/skeleton";
import ActionType from "../assets/types/ActionType";
import Categories from "../components/Categories";

export default function Category() {
  const navigation = useNavigation();
  const actions = useLoaderData() as ActionType[];

  const skeletons = [...new Array(2)].map((_, i) => <Skeleton key={i} />);
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

export async function loader({ params }: any) {
  // const actions = await getCategoryActions(params.category_id);
  console.log("params.category_id: ", params.category_id);  
  const actions = await getAllActions();
  console.log("category actions: ", actions);  

  


  if (!actions) {
    throw new Response("", {
      status: 404,
      statusText: "Нет акций в категории",
    });
  }
  return actions;
}
