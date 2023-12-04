import React from "react";
import styles from "../../../styles/HomePage.module.css";
import Link from "next/link"; 

export default function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img className={styles.picture} src="https://i.ytimg.com/vi/e5uKYsbQOIE/maxresdefault.jpg" alt="Some description" />
        <div className={styles.overlay}>
          <div className={styles.title}>Davig Goggins Biography</div>
       <Link href={"/Text"}>  <button className={styles.button}>START</button></Link>
        </div>
      </div>
    </div>
  );
}