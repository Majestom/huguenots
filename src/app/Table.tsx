import { TableProps } from "./types";
import styles from "./Table.module.css";

export function Table({ data, filter }: TableProps) {
  const filteredData = data.rows.filter((row) => {
    const relevantCells = row.filter(
      ({ columnKey, value }) => {
        const columnLabel =
          data.headers.find(
            (header) => header.key === columnKey
          )?.name || "";

        return filter[columnLabel]?.includes(value);
      }
    );
    if (
      relevantCells.length === Object.keys(filter).length
    ) {
      return true;
    } else {
      return false;
    }
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
        {filteredData.map((row) => {
          return (
            <tr key={row[0].value}>
              {row.map(({ columnKey, value }) => {
                return (
                  <td
                    key={columnKey}
                    className={styles.cells}
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
