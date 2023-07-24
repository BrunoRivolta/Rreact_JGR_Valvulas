import React from "react";
import styles from "./MenuSuperior.module.scss";

export default function Home() {

  return (
    <section className={styles.menu}>
        <h1>JGR</h1>
      <nav>
        <ul className={styles.containerLinks}>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Sobre</p>
          </li>
          <li>
            <p>Catalogos</p>
          </li>
          <li>
            <p>Contato</p>
          </li>
        </ul>
      </nav>
    </section>
  );
}
