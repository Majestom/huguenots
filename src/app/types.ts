export type Column = {
  name: string;
  key: string;
  position: string;
};

export type Cell = {
  columnKey: string;
  value: string;
};

export type TableData = {
  headers: Column[];
  rows: Cell[][];
};

export type TableProps = {
  data: TableData;
  filter: Record<string, string[]>;
};
