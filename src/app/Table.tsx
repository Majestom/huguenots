import { TableData } from "./types";
import styles from "./Table.module.css";

export function Table({ data }: { data: TableData }) {
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
        {data.rows.map((row) => (
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
        ))}
      </tbody>
    </table>
  );
}
