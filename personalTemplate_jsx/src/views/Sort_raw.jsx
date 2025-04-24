import React, { useState, useMemo } from "react";
import styles from "../style/Sort_raw.module.scss";

const data = [
  { id: 1, name: "香蕉", price: 2.5, date: "2024-05-01" },
  { id: 2, name: "苹果", price: 3.2, date: "2024-03-15" },
  { id: 3, name: "橘子", price: 1.8, date: "2024-04-10" },
  { id: 4, name: "草莓", price: 5.0, date: "2024-02-20" },
  { id: 5, name: "葡萄", price: 4.1, date: "2024-01-30" },
];

const SortRaw = () => {
  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedData = useMemo(() => {
    const list = [...data];
    list.sort((a, b) => {
      let x = a[sortKey],
        y = b[sortKey];
      if (sortKey === "date") {
        x = new Date(x);
        y = new Date(y);
      }
      if (x < y) return sortOrder === "asc" ? -1 : 1;
      if (x > y) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return list;
  }, [sortKey, sortOrder]);

  const onHeaderClick = (key) => {
    if (sortKey === key) {
      setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "名称" },
    { key: "price", label: "价格(元)" },
    { key: "date", label: "日期" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>原生排序表格</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => {
              const isActive = sortKey === col.key;
              const headerClass = [
                styles["col-header"],
                isActive && styles[sortOrder],
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <th
                  key={col.key}
                  className={headerClass}
                  onClick={() => onHeaderClick(col.key)}
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortRaw;
