import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useAppStore } from "../context/AppStoreProvider";
import { getProfile } from "../api";
import { Link } from "react-router-dom";

export default function Profile() {
  const [profileData, setProfileData] = useState({} as ProfileDataType)
  const { user } = useAppStore();

  useEffect(() => {
    (async () => {
      await getProfile().then(response => {
        setProfileData(response.profile)
      });
    })();
  }, [])

  if (!user) return <h1 style={{ textAlign: 'center', paddingTop: '10vh'}}>Нужно <Link to='/auth/login'>авторизоваться</Link></h1>

  return (
    <>
      <Header />
      <Categories />
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '67vh', flexDirection: 'column', gap: '2vh' }}>
        <p>Почта: <b>{user?.email}</b></p>
        <p>Телефон: <b>{profileData.phone}</b></p>
        <p>Получать новые акции по почте: <b>{profileData.subscribe ? 'да' : 'нет'}</b></p>
      </section>
      <Footer />
    </>
  );
}

export type ProfileDataType = {
  day: number;
  month: number;
  age: string;
  birth_date: string;
  company: string;
  education: string;
  first_name: string;
  full_name: string;
  income: string;
  last_name: string;
  inet_usage_freq: string;
  phone: string;
  place: string;
  portal_name: string;
  scope: string;
  icq: null;
  sex: null;
  sms: string;
  social_status: string;
  subscribe: string;
  subscribe_coupon: string;
  hide_status: number;
  year: number;
}