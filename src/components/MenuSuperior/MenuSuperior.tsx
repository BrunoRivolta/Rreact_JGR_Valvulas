import React, { useEffect, useState } from "react";
import styles from "./MenuSuperior.module.scss";
import logo from "../../assets/jgrLogoClaro.png";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

export default function MenuSuperior() {
  const navigate = useNavigate();
  const localizacaoAtual = useLocation();

  return (
    <section className={styles.container}>
      <img src={logo} alt="Logo da JGR" />
      <nav>
        <ul className={styles.containerLinks}>
          <li
            className={styles.link}
            onClick={() => {
              navigate("/");
            }}
          >
            <p>Home</p>
          </li>
          <li
            className={styles.link}
            onClick={() => {
              navigate("/sobre");
            }}
          >
            <p>Sobre</p>
          </li>
          <li className={styles.link}
			onClick={() => {
				navigate("/sobre");
			}}
		  >
            <p>Catalogos</p>
          </li>
          <li className={styles.link}
			onClick={() => {
				navigate("/sobre");
			}}
		  >
            <p>Contato</p>
          </li>
          <div className={`${localizacaoAtual.pathname === '/' ? styles.lineDestacado : ''}`}></div>
          <div className={`${localizacaoAtual.pathname === '/sobre' ? styles.lineDestacado : ''}`}></div>
          <div className={`${localizacaoAtual.pathname === '/catalogos' ? styles.lineDestacado : ''}`}></div>
          <div className={`${localizacaoAtual.pathname === '/contato' ? styles.lineDestacado : ''}`}></div>
        </ul>
      </nav>
      <div className={styles.containerBusca}>
        <p>BUSCAR</p>
        <BsSearch className={styles.icon} />
      </div>
    </section>
  );
}
