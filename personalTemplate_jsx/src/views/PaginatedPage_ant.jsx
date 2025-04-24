// src/views/PaginatedPage.jsx
import React, { useState } from "react";
import { List, Pagination, Card } from "antd";

const PaginatedPageAnt = () => {
  // 分页配置
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // 模拟数据（50 条）
  const data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `这是第 ${i + 1} 项的描述`,
  }));

  // 计算当前页要展示的数据
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageData = data.slice(start, end);

  // 页码变化时更新状态
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Card title="分页列表示例" style={{ margin: 24 }}>
      {/* 列表展示 */}
      <List
        itemLayout="horizontal"
        dataSource={pageData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />

      {/* 分页控件 */}
      <Pagination
        style={{ textAlign: "center", marginTop: 16 }}
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </Card>
  );
};

export default PaginatedPageAnt;
