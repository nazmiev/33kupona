import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { getPastActions } from "../api";
import Skeleton from "../components/AkciyaBlock/skeleton";
import AkciyaBlock from "../components/AkciyaBlock";

export default function Past() {
  const [loading, setLoading] = useState(true);
  const [actions, setActions] = useState<any>([]);
  const [pageNum, setPageNum] = useState(1);
  const [lastElement, setLastElement] = useState<HTMLElement | null>(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPageNum((no) => no + 1);
        }
      })
  );

  useEffect(() => {
    setLoading(true);
    (async () => {
      await getPastActions(pageNum).then(response => {
        let all = new Set([...actions, ...response.actions]);
        setActions([...all]);
        setLoading(false);
      });
    })();
  }, [pageNum]);

  const currentObserver = observer.current;
  if (lastElement) {
    currentObserver.observe(lastElement);
  }

  const akcii = loading ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) : actions.map((action: any) => (
    <AkciyaBlock {...action} key={action.id} />
  ));

  return (
    <>
      <Header />
      <Categories />
      <div className="main__container">
        {akcii}
      </div>
      <div ref={setLastElement}>
        <section style={{textAlign: "center", padding: "3vh"}}>Загужаем акции...</section>
      </div>
      <Footer />
    </>
  );
}
