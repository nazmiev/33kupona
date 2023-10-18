import { Outlet } from "react-router-dom";
import { getUser } from "../api";
import { useEffect } from "react";
import { useAppStore } from "../context/AppStoreProvider";


export default function Root() {
  const { user, setUser } = useAppStore();

  useEffect(() => {
    (async () => {
      await getUser().then(user => {
        if (user.success) {
          setUser(user.success)
        }
      });
    })();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
