"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className={styles.main}>
      <menu className={styles.menu}>
        <Image
          src={"/Huguenots_mark.svg"}
          width={37}
          height={37}
          alt={"Huguenots logo"}
        />
        <figure className={styles.avatar}>
          <Image
            src={"/british_flag.png"}
            width={20}
            height={20}
            alt={"British flag 1707-1800"}
          />
          <figcaption>Professional investor</figcaption>
        </figure>
      </menu>
      <div className={styles.searchContainer}>
        <h1>Product Finder</h1>
        <div className={styles.searchBarHolder}>
          <Image
            src={"/ionic-md-search.svg"}
            width={20}
            height={20}
            alt={"Search icon"}
          />
          <h2>SEARCH</h2>
          <input
            className={styles.search}
            type="text"
            placeholder="Enter fund name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}
