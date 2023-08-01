import React from "react";
import styles from "./Home.module.scss";
import valves from '../../assets/149694476_113794914078813_1918353810492694_n.jpg'

export default function Home() {

  return (
    <section className={styles.container}>
		<img src={valves} />
		<div>
			<p>Soluções para industria alimenticia</p>
		</div>
    	<h1>home</h1>
    </section>
  );
}
