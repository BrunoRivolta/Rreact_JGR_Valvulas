import React, { useState } from "react";
import styles from "./Menus.module.scss";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";
import {IoMdMenu} from "react-icons/io";
import Home from "../Home/Home";

export default function Menus() {
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
		<IoMdMenu className={styles.menuHamburguerIcon} onClick={() => menuToogle()} style={{color: menuVisivel ? "#FFFFFF" : "#000000" }}/>
      <section className={styles.preContainer}>
        <div
          className={styles.menu}
          style={{ right: menuVisivel ? "0px" : "140px" }}
        >
          <MenuLateral />
        </div>
        <div className={styles.pageContainer}>
          <Home />
        </div>
      </section>
    </section>
  );
}
