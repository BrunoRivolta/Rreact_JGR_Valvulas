import React from "react";
import styles from "./MenuLateral.module.scss";
import { BsFillHouseFill, BsPeopleFill, BsGearFill, BsFileRichtextFill, BsFillTelephoneFill } from "react-icons/bs";

export default function MenuLateral() {
  return (
    <section className={styles.menu}>
      <nav>
        <ul>
          <li>
			<BsFillHouseFill className={styles.icon}/>
            <p>Home</p>
          </li>
          <li>
			<BsPeopleFill className={styles.icon}/>
            <p>Sobre</p>
          </li>
          <li>
			<BsGearFill className={styles.icon}/>
            <p>Usinagem</p>
          </li>
          <li>
		  	<BsGearFill className={styles.icon}/>
            <p>Caldeiraria</p>
          </li>
          <li>
		  	<BsGearFill className={styles.icon}/>
            <p>Acabamento</p>
          </li>
          <li>
			<BsFileRichtextFill className={styles.icon}/>
            <p>Catalogos</p>
          </li>
          <li>
			<BsFillTelephoneFill className={styles.icon}/>
            <p>Contato</p>
          </li>
        </ul>
      </nav>
    </section>
  );
}
