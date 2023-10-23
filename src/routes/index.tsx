import { ScrollRestoration, useLoaderData, useNavigation } from "react-router-dom";
import AkciyaBlock from "../components/AkciyaBlock";
import Skeleton from "../components/AkciyaBlock/skeleton";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useAppStore } from "../context/AppStoreProvider";

export default function Index() {
  const navigation = useNavigation();
  const { actions } = useAppStore();

  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const akcii = actions.map((action: any) => (
    <AkciyaBlock key={action.id} {...action} />
  ));

  return (
    <>
      <Header />
      <Categories/>
      <ScrollRestoration />
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
      <Footer />
    </>
  );
}
