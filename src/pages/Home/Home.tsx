import React, { useState } from "react";
import styles from "./Home.module.scss";
import Menu from "../MenuLateral/MenuLateral";

export default function Home() {
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
      <div className={styles.menu} style={{ right: menuVisivel ? "0px" : '100px' }}>
        <Menu />
      </div>
	  <div className={styles.pageContainer}>
      	<h1>home</h1>
	  </div>
      <button onClick={() => menuToogle()}>Mudar</button>
    </section>
  );
}
