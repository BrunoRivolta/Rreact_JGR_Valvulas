import React from "react";
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <section className={styles.menu}>
      <div>
        <h1>JGR</h1>
      </div>
      <nav>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Sobre</p>
          </li>
          <li>
            <p>O que fazemos?</p>
            <ul>
              <li>
                <p>Usinagem</p>
              </li>
              <li>
                <p>Caldeiraria</p>
              </li>
              <li>
                <p>Acabamento</p>
              </li>
            </ul>
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
