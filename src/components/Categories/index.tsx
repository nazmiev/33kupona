import styles from "./categories.module.scss";
import { NavLink } from "react-router-dom";
import { useAppStore } from "../../context/AppStoreProvider";

export default function Categories() {
  const { categories } = useAppStore();

  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li key={0}>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : ""}>
              Свежее
            </NavLink>
          </li>
          {categories?.length &&
            categories.map((category: any) => (
              <li key={category.id}>
                <NavLink
                  to={category.id > 0 ? `/c/${category.url_name}` : "/"}
                  className={({ isActive, isPending }) =>
                    isPending ? styles.pending : isActive ? styles.active : ""
                  }
                >
                  {category.name} ({category.item_count})
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
