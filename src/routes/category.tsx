import { useNavigation, useParams } from "react-router-dom";
import AkciyaBlock from "../components/AkciyaBlock";
import Skeleton from "../components/AkciyaBlock/skeleton";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAppStore } from "../context/AppStoreProvider";

export default function Category() {
  const navigation = useNavigation();
  const { actions, categories, loading } = useAppStore();
  let { category_url } = useParams();
  const findCategory = categories.find(c => c.url_name === category_url);

  const skeletons = [...new Array(2)].map((_, i) => <Skeleton key={i} />);

  const akcii = findCategory?.id
    ? actions.filter(action => action.categories.includes(findCategory.id)).map((action: any) => (
      <AkciyaBlock key={action.id} {...action} />
    )) : actions.map((action: any) => (
      <AkciyaBlock key={action.id} {...action} />
    ));

  return (
    <>
      <Header />
      <Categories />
      <section className="main__container">
        {actions.length ? (
          loading ? (
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
