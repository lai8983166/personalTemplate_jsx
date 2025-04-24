// src/views/SortPage.jsx
import React from "react";
import { Table, Card } from "antd";

const data = [
  { id: 1, name: "香蕉", price: 2.5, date: "2024-05-01" },
  { id: 2, name: "苹果", price: 3.2, date: "2024-03-15" },
  { id: 3, name: "橘子", price: 1.8, date: "2024-04-10" },
  { id: 4, name: "草莓", price: 5.0, date: "2024-02-20" },
  { id: 5, name: "葡萄", price: 4.1, date: "2024-01-30" },
];

const SortAnt = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder: "ascend",
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "价格 (元)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (value) => value.toFixed(2),
    },
    {
      title: "日期",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
  ];

  return (
    <Card title="可排序表格示例" style={{ margin: 24 }}>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </Card>
  );
};

export default SortAnt;
