"use client";
import { useState } from "react";
import Image from "next/image";
import { Table } from "./Table";
import tableData from "./data/tableData.json";
import styles from "./page.module.css";

// const tableData = {
//   headers: [
//     {
//       name: "Fund Name",
//       key: "fundName",
//       position: "left",
//     },
//     {
//       name: "Primary Ticker",
//       key: "primaryTicker",
//       position: "left",
//     },
//     {
//       name: "Income Treatment",
//       key: "incomeTreatment",
//       position: "left",
//     },
//     {
//       name: "Share Class Currency",
//       key: "shareClassCurrency",
//       position: "left",
//     },
//     {
//       name: "ISIN",
//       key: "isin",
//       position: "right",
//     },
//     {
//       name: "Strategy",
//       key: "strategy",
//       position: "right",
//     },
//     {
//       name: "Asset Class",
//       key: "assetClass",
//       position: "right",
//     },
//     {
//       name: "Region",
//       key: "region",
//       position: "right",
//     },
//     {
//       name: "Style",
//       key: "style",
//       position: "right",
//     },
//   ],
//   rows: [
//     [
//       {
//         columnKey: "fundName",
//         value: "NASDAQ Cybersecurity UCITS ETF",
//       },
//       {
//         columnKey: "primaryTicker",
//         value: "CBRS",
//       },
//       {
//         columnKey: "incomeTreatment",
//         value: "Acc",
//       },
//       {
//         columnKey: "shareClassCurrency",
//         value: "EUR",
//       },
//       {
//         columnKey: "isin",
//         value: "IE00BF16M727",
//       },
//       {
//         columnKey: "strategy",
//         value: "Thematic",
//       },
//       {
//         columnKey: "assetClass",
//         value: "Equity",
//       },
//       {
//         columnKey: "region",
//         value: "Global",
//       },
//       {
//         columnKey: "style",
//         value: "Active",
//       },
//     ],
//   ],
// };

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
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
        className={`${styles.tableContainer} ${styles.padding}`}
      >
        <Table data={tableData} />
      </section>
    </main>
  );
}
