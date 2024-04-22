"use client";
import { useState } from "react";
import Image from "next/image";
import { FilterType } from "./types";
import tableData from "./data/tableData.json";
import { TopMenu } from "./TopMenu";
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

const assetClassOptions = ["Equity", "Fixed Income"];

const marketAndRegion = [
  "Global",
  "United States",
  "Europe",
  "Developed",
];

const filters: FilterType = {
  Strategy: strategyOptions,
  Style: styleOptions,
  "Market & Region": marketAndRegion,
  "Asset Class": assetClassOptions,
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterType>(filters);

  return (
    <main className={styles.main}>
      <TopMenu />
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
            setFilter({
              ...filter,
              ["Strategy"]: options,
            })
          }
          options={filters["Strategy"]}
        />
        <Dropdown
          filterName={"Asset Class"}
          selectedOptions={filter["Asset Class"]}
          setSelectedOptions={(options: string[]) =>
            setFilter({
              ...filter,
              ["Asset Class"]: options,
            })
          }
          options={filters["Asset Class"]}
        />
        <Dropdown
          filterName={"Market & Region"}
          selectedOptions={filter["Market & Region"]}
          setSelectedOptions={(options: string[]) =>
            setFilter({
              ...filter,
              ["Market & Region"]: options,
            })
          }
          options={filters["Market & Region"]}
        />
        <Dropdown
          filterName={"Style"}
          selectedOptions={filter["Style"]}
          setSelectedOptions={(options: string[]) =>
            setFilter({
              ...filter,
              ["Style"]: options,
            })
          }
          options={filters["Style"]}
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
