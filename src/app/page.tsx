"use client";
import { useState } from "react";
import Image from "next/image";
import { FilterType } from "./types";
import tableData from "./data/tableData.json";
import { TopMenu } from "./TopMenu";
import { Dropdown } from "./Dropdown";
import { DropdownFancy } from "./DropdownFancy";
import { Table } from "./Table";
import { BottomMenu } from "./BottomMenu";
import styles from "./page.module.css";

const marketAndRegionGroup = [
  {
    label: "Market",
    options: [
      { label: "Developed" },
      { label: "Emerging" },
    ],
  },
  {
    label: "Region",
    options: [
      { label: "Asia Pacific" },
      {
        label: "Europe",
        subOptions: [
          { label: "Eurozone" },
          { label: "Germany" },
          { label: "Switzerland" },
          { label: "United Kingdom" },
        ],
      },
      { label: "Global" },
      {
        label: "North America",
        subOptions: [{ label: "United States" }],
      },
    ],
  },
];

const assetClassGroup = [
  {
    label: "Equity",
    options: [
      { label: "All Cap" },
      { label: "Large Cap" },
      { label: "Small Cap" },
    ],
  },
  {
    label: "Fixed Income",
    options: [
      { label: "Government" },
      { label: "Currency" },
    ],
  },
];

const strategyOptions = [
  "Thematic",
  "Factors",
  "Fixed Income",
  "Capital Strength",
  "Currency Hedge",
  "ESG",
];

const styleOptions = ["Active", "Index"];

const assetClassOptions = [
  "Equity",
  "Fixed Income",
  "All Cap",
  "Large Cap",
  "Small Cap",
  "Government",
  "Currency",
];

const marketAndRegion = [
  "Global",
  "United States",
  "Europe",
  "Developed",
  "Emerging",
  "Asia Pacific",
  "North America",
  "Eurozone",
  "Germany",
  "Switzerland",
  "United Kingdom",
];

const filters: FilterType = {
  Strategy: strategyOptions,
  Style: styleOptions,
  Region: marketAndRegion,
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
        <h1 className={styles.mainHeader}>
          Product Finder
        </h1>
        <div className={styles.searchBarHolder}>
          <Image
            src={"/ionic-md-search.svg"}
            width={20}
            height={20}
            alt={"Search icon"}
          />
          <h2 className={styles.searchHeader}>SEARCH</h2>
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
        <DropdownFancy
          groups={assetClassGroup}
          selectedOptions={filter["Asset Class"]}
          setSelectedOptions={(options: string[]) =>
            setFilter({
              ...filter,
              ["Asset Class"]: options,
            })
          }
          filterName={"Asset Class"}
        />
        <DropdownFancy
          groups={marketAndRegionGroup}
          selectedOptions={filter["Region"]}
          setSelectedOptions={(options: string[]) =>
            setFilter({
              ...filter,
              ["Region"]: options,
            })
          }
          filterName={"Market & Region"}
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
      <BottomMenu />
    </main>
  );
}
