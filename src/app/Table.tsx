import { TableProps, TableData, Cell } from "./types";
import styles from "./Table.module.css";

function filterTableData({
  tableData,
  filterData,
}: {
  tableData: TableData;
  filterData: Record<string, string[]>;
}) {
  return tableData.rows.filter((row) => {
    return row.every((cell) => {
      const columnLabel =
        tableData.headers.find(
          (header) => header.key === cell.columnKey
        )?.name || "";

      if (!filterData.hasOwnProperty(columnLabel)) {
        return true;
      }
      return filterData[columnLabel].includes(cell.value);
    });
  });
}

function searchTableData({
  rows,
  searchTerm,
}: {
  rows: Cell[][];
  searchTerm: string;
}) {
  return rows.filter((row) => {
    return row.some((cell) => {
      return cell.value.toLowerCase().includes(searchTerm);
    });
  });
}

export function Table({
  data,
  filter,
  nameSearchTerm,
}: TableProps) {
  const filteredData = filterTableData({
    tableData: data,
    filterData: filter,
  });

  const searchTerm = nameSearchTerm.toLowerCase();
  const filteredDataWithSearch = searchTableData({
    rows: filteredData,
    searchTerm,
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {data.headers.map(({ key, position, name }) => (
            <th
              key={key}
              className={
                position === "left"
                  ? `${styles.tableHeaderLeft}`
                  : `${styles.tableHeaderRight}`
              }
            >
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredDataWithSearch.map((row) => {
          return (
            <tr key={row[1].value} className={styles.rows}>
              {row.map(({ columnKey, value }, i) => {
                return (
                  <td
                    key={columnKey}
                    className={`${styles.cells} ${
                      i === 0 ? styles.firstColumn : ""
                    } ${
                      i === 1 || i === 2 || i === 3
                        ? styles.hasMaxWidth
                        : ""
                    }
                    ${i === 3 ? styles.fourthColumn : ""}
                    `}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
