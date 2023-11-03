import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getMyCoupons } from "../api";
import Skeleton from "../components/AkciyaBlock/skeleton";
import CouponBlock from "../components/CouponBlock";

export default function Coupons() {
  const [loading, setLoading] = useState(true);
  const [showOld, setShowOld] = useState(false);
  const [coupons, setCoupons] = useState<any>([]);
  const [coupons_off, setCoupons_off] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await getMyCoupons().then(response => {
        response.coupons.map((action: any) => {
          Object.entries(action.offers).map(([id, offer]: any) => {
            offer.coupons.map((coupon: any) => {
              setCoupons((prev: any) => [...prev, {
                action_title: action.title,
                offer_title: offer.title,
                ...coupon
              }]);
            })
          })
        });
        response.coupons_off.map((coupon: any) => {
          Object.entries(coupon.offers).map(([id, offer]: any) => {
            setCoupons_off((prev: any) => [...prev, ...offer.coupons]);
          })
        });
        setLoading(false);
      });
    })();
  }, []);

  const akcii = loading ? [...new Array(1)].map((_, i) => <Skeleton key={i} />) : coupons.map((coupon: any) => (
    <CouponBlock {...coupon} key={coupon.id} />
  ));
  
  const more = loading ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) : coupons_off.map((coupon: any) => (
    <CouponBlock {...coupon} key={coupon.id} />
  ));

  return (
    <>
      <Header />
      <Categories />
      <section className="mycoupons__container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <article>
        <h1 style={{textAlign: "center", margin: "20px auto"}}>Мои купоны:</h1>
        {akcii}<br/>
        </article>
        <button style={{margin: "20px", padding: "10px" ,borderRadius: "5px"}} onClick={()=> setShowOld(!showOld)}>Показать старые</button>
        {showOld && <article>
        <h1 style={{textAlign: "center", margin: "20px auto"}}>Старые купоны:</h1>
        {more}
        </article>}
      </section>
      <Footer />
    </>
  );
}
