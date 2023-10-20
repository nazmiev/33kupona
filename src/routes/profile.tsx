import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useAppStore } from "../context/AppStoreProvider";
import { getProfile } from "../api";

export default function Profile() {
  const { user } = useAppStore();

  (async () => {
    await getProfile().then(response => {
      console.log('response: ', response);
    });
  })();

  return (
    <>
      <Header />
      <Categories />
      <h1>Профиль: {user?.email}</h1>
      <Footer />
    </>
  );
}
