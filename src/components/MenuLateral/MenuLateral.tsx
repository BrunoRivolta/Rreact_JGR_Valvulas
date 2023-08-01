import React from "react";
import styles from "./MenuLateral.module.scss";
import {
  BsFillHouseFill,
  BsPeopleFill,
  BsGearFill,
  BsFileRichtextFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

export default function MenuLateral() {
  const navigate = useNavigate();
  const localizacaoAtual = useLocation();
  return (
    <section className={styles.menu}>
      <nav>
        <ul>
          <li
            className={styles.linkContainer}
            onClick={() => {
              navigate("/");
            }}
            style={{
              backgroundColor:
                localizacaoAtual.pathname === "/"
                  ? "rgba(50, 57, 62, 1)"
                  : "",
            }}
          >
            <BsFillHouseFill className={styles.icon} />
            <p>Home</p>
          </li>
          <li
            className={styles.linkContainer}
            onClick={() => {
              navigate("/sobre");
            }}
            style={{
              backgroundColor:
                localizacaoAtual.pathname === "/sobre"
                  ? "rgba(50, 57, 62, 1)"
                  : "",
            }}
          >
            <BsPeopleFill className={styles.icon} />
            <p>Sobre</p>
          </li>
          <li className={styles.linkContainer}>
            ˝
            <BsGearFill className={styles.icon} />
            <p>Usinagem</p>
          </li>
          <li className={styles.linkContainer}>
            <BsGearFill className={styles.icon} />
            <p>Caldeiraria</p>
          </li>
          <li className={styles.linkContainer}>
            <BsGearFill className={styles.icon} />
            <p>Acabamento</p>
          </li>
          <li className={styles.linkContainer}>
            <BsFileRichtextFill className={styles.icon} />
            <p>Catalogos</p>
          </li>
          <li className={styles.linkContainer}>
            <BsFillTelephoneFill className={styles.icon} />
            <p>Contato</p>
          </li>
        </ul>
      </nav>
    </section>
  );
}
