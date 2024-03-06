import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  const pages = [
    { title: "Home", path: "/" },
    { title: "Product", path: "/product" },
    { title: "Pricing", path: "/pricing" },
  ];
  return (
    <div>
      <ul className="flex justify-around p-4 border-4 ">
        {pages.map((e, i) => (
          <li key={i} className={styles.title}>
            <NavLink to={e.path}>{e.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageNav;
