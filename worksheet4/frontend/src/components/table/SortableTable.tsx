// components/table/SortableTable.tsx
import React from "react";

interface Header {
  key: string;
  label: string;
}

interface SortableTableProps {
  headers: Header[];
  data: Record<string, any>[];
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((header) => (
              <td key={header.key}>{row[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;