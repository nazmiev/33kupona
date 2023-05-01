import styles from "./categories.module.scss";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const items = [
    { id: 0, title: "Свежее", url: "" },
    { id: 7, title: "💅 Красота", url: "beauty" },
    { id: 6, title: "🚗 Авто", url: "auto" },
    { id: 3, title: "🍕 Еда", url: "food" },
    { id: 10, title: "🚌 Здоровье", url: "holiday" },
    { id: 13, title: "🎄 Новый год", url: "noviy_god" },
    { id: 14, title: "❤ 14 февраля", url: "podarki_k_14_fevralya" },
    { id: 25, title: "1 сентября 📚", url: "1sentyabrya" },
    { id: 21, title: "🎖 23 февраля", url: "podarki_k_23fevralya" },
    { id: 11, title: "🌹 8 Марта", url: "march" },
    { id: 2, title: "🕺 Развлечения", url: "leisure" },
    { id: 5, title: "🎁 Товары", url: "products" },
  ];

  return (
    <div className="categories__container">
      <nav className={styles.nav}>
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.id > 0 ? `/c/${item.id}` : "/"}
                  className={({ isActive, isPending }) =>
                    isPending ? styles.pending : isActive ? styles.active : ""
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>нет категорий</i>
          </p>
        )}
      </nav>
    </div>
  );
}
