import { useLoaderData, useNavigation } from "react-router-dom";
import { getAllActions, getCategoryActions } from "../api";
import AkciyaBlock from "../components/AkciyaBlock";
import Skeleton from "../components/AkciyaBlock/skeleton";
import ActionType from "../assets/types/ActionType";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Category() {
  const navigation = useNavigation();
  const actions = useLoaderData() as ActionType[];

  const skeletons = [...new Array(2)].map((_, i) => <Skeleton key={i} />);
  const akcii = actions.map((action: any) => (
    <AkciyaBlock key={action.id} {...action} />
  ));

  return (
    <>
      <Header/>
      <Categories />
      <section className="main__container">
        {actions.length ? (
          navigation.state === "loading" ? (
            skeletons
          ) : (
            akcii
          )
        ) : (
          <h1>нет акций в категории</h1>
        )}
      </section>
      <Footer />
    </>
  );
}

export async function loader({ params }: any) {
  const actions = await getAllActions();

  if (!actions) {
    throw new Response("", {
      status: 404,
      statusText: "Нет акций в категории",
    });
  }
  return actions;
}
