import { useEffect, useState } from "react";
import styles from "./ProfileBlock.module.scss";
import { getProfile } from "../../api";
import { useAppStore } from "../../context/AppStoreProvider";

export default function ProfileBlock() {
  const [profileData, setProfileData] = useState({} as ProfileDataType)
  const { user } = useAppStore();

  useEffect(() => {
    (async () => {
      await getProfile().then(response => {
        setProfileData(response.profile)
        console.log('response.profile: ', response.profile);
      });
    })();
  },[])
  return (
    <section className={styles.profile}>
      <p>Почта: <b>{user?.email}</b></p>
      <p>Телефон: <b>{profileData.phone}</b></p>
      <p>Получать новые акции по почте: <b>{profileData.subscribe ? 'да' : 'нет'}</b></p>
    </section>
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