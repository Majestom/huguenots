"use client";
import { useState } from "react";
import Image from "next/image";
import tableData from "./data/tableData.json";
import { Dropdown } from "./Dropdown";
import { Table } from "./Table";
import styles from "./page.module.css";

const strategyOptions = [
  "Thematic",
  "Factors",
  "Fixed Income",
  "Capital Strength",
  "Currency Hedge",
  "ESG",
];

const styleOptions = ["Active", "Index"];

const filters = {
  Strategy: strategyOptions,
  Style: styleOptions,
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(filters);
  const [data, setData] = useState(tableData);

  return (
    <main className={styles.main}>
      <menu className={`${styles.menu} ${styles.padding}`}>
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
      <section
        className={`${styles.searchContainer} ${styles.padding}`}
      >
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
      </section>
      <section
        className={`${styles.filterContainer} ${styles.padding}`}
      >
        <Dropdown
          filterName={"Strategy"}
          selectedOptions={filter["Strategy"]}
          setSelectedOptions={(options: string[]) =>
            setFilter({ ...filter, Strategy: options })
          }
          options={strategyOptions}
        />
        <Dropdown
          filterName={"Style"}
          selectedOptions={filter["Style"]}
          setSelectedOptions={(options: string[]) =>
            setFilter({ ...filter, Style: options })
          }
          options={styleOptions}
        />
      </section>
      <section
        className={`${styles.tableContainer} ${styles.padding}`}
      >
        <Table
          data={tableData}
          filter={filter}
          nameSearchTerm={searchTerm}
        />
      </section>
    </main>
  );
}
