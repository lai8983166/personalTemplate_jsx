import React, { useState } from "react";

const FilterRaw = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([
    { id: 1, name: "Item 1", category: "category1", date: "2024-01-01" },
    { id: 2, name: "Item 2", category: "category2", date: "2024-02-15" },
    { id: 3, name: "Item 3", category: "category1", date: "2024-03-10" },
    { id: 4, name: "Item 4", category: "category3", date: "2024-04-05" },
    { id: 5, name: "Item 5", category: "category2", date: "2024-05-25" },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = useState(filteredData)[0]; // 原始数据保存在初始化时的 filteredData

  // 过滤逻辑
  const handleFilter = () => {
    let result = data;

    if (searchText) {
      const txt = searchText.toLowerCase();
      result = result.filter((item) => item.name.toLowerCase().includes(txt));
    }
    if (selectedCategory) {
      result = result.filter((item) => item.category === selectedCategory);
    }
    if (startDate) {
      const s = new Date(startDate);
      result = result.filter((item) => new Date(item.date) >= s);
    }
    if (endDate) {
      const e = new Date(endDate);
      result = result.filter((item) => new Date(item.date) <= e);
    }

    setFilteredData(result);
    // 重置全选状态
    setSelectAll(false);
    setSelectedItems([]);
  };

  // 重置所有筛选和选择
  const handleReset = () => {
    setSearchText("");
    setSelectedCategory("");
    setStartDate("");
    setEndDate("");
    setFilteredData(data);
    setSelectedItems([]);
    setSelectAll(false);
  };

  // 单条切换
  const handleItemSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // 全选 / 取消全选
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredData.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: 8 }}
        >
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ padding: 8 }}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <button onClick={handleFilter} style={{ padding: "8px 16px" }}>
          Apply Filters
        </button>
        <button onClick={handleReset} style={{ padding: "8px 16px" }}>
          Reset Filters
        </button>
        <button onClick={handleSelectAll} style={{ padding: "8px 16px" }}>
          {selectAll ? "Deselect All" : "Select All"}
        </button>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>
              Select
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Name</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>
              Category
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleItemSelect(item.id)}
                />
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {item.name}
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {item.category}
              </td>
              <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterRaw;
