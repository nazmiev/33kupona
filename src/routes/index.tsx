import { ScrollRestoration } from "react-router-dom";
import AkciyaBlock from "../components/AkciyaBlock";
import Skeleton from "../components/AkciyaBlock/skeleton";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useAppStore } from "../context/AppStoreProvider";

export default function Index() {
  const { actions, loading } = useAppStore();

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
        {loading ? (
            skeletons
          ) : (
            akcii
          )
        }
      </div>
      <Footer />
    </>
  );
}
