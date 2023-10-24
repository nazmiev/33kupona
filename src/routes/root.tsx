import { Outlet } from "react-router-dom";
import { getAllActions, getUser } from "../api";
import { useEffect } from "react";
import { useAppStore } from "../context/AppStoreProvider";
import { CategoryType } from "../context/types";

export default function Root() {
  const { setUser, setActions, setCategories, setLoading } = useAppStore();

  useEffect(() => {
    (async () => {
      await getUser().then(user => {
        if (user.success) {
          setUser(user.success)
        }
      });
      await getAllActions().then(json => {
        if (json) {
          setActions(json.actions);
          json = Object.entries(json.categories).map(([id, offer]: any) => { offer.id = id; return offer });
          json.sort(function (a:CategoryType, b:CategoryType) {
            if (a.item_count > b.item_count) {
              return -1;
            }
            if (a.item_count < b.item_count) {
              return 1;
            }
            return 0;
          });
          setCategories(json);
          setLoading(false);
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
