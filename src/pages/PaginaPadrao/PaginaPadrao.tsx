import React, { useState } from "react";
import styles from "./PaginaPadrao.module.scss";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";
import { IoMdMenu } from "react-icons/io";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  const [menuVisivel, setMenuVisivel] = useState(false);

  function menuToogle(): void {
    if (menuVisivel) {
      setMenuVisivel(false);
    } else {
      setMenuVisivel(true);
    }
  }

  return (
    <section className={styles.container}>
      <MenuSuperior />
      <IoMdMenu
        className={styles.menuHamburguerIcon}
        onClick={() => menuToogle()}
        style={{ color: menuVisivel ? "#00f2ff" : "#FFFFFF" }}
      />
      <section className={styles.preContainer}>
        <div
          className={styles.menu}
          style={{ right: menuVisivel ? "0px" : "140px" }}
        >
          <MenuLateral />
        </div>
        <div className={styles.pageContainer}>
			<Outlet />
        </div>
      </section>
    </section>
  );
}
