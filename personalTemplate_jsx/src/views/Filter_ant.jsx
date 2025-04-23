import React, { useState } from "react";
import {
  Input,
  Button,
  Select,
  DatePicker,
  Space,
  Checkbox,
  Table,
} from "antd";
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;

const FilterAnt = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false); // 用于全选/取消全选按钮

  // 假设的数据
  const data = [
    { id: 1, name: "Item 1", category: "category1", date: "2024-01-01" },
    { id: 2, name: "Item 2", category: "category2", date: "2024-02-15" },
    { id: 3, name: "Item 3", category: "category1", date: "2024-03-10" },
    { id: 4, name: "Item 4", category: "category3", date: "2024-04-05" },
    { id: 5, name: "Item 5", category: "category2", date: "2024-05-25" },
  ];

  // 处理搜索文本变化
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // 处理下拉框选择变化
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  // 处理日期范围选择
  const handleDateRangeChange = (dates) => {
    setDateRange(dates);
  };

  // 处理筛选
  const handleFilter = () => {
    let filteredData = data;

    if (searchText) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (dateRange[0] && dateRange[1]) {
      const startDate = moment(dateRange[0]);
      const endDate = moment(dateRange[1]);
      filteredData = filteredData.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(startDate, endDate, null, "[]");
      });
    }

    setFilteredData(filteredData);
  };

  // 处理选择的结果
  const handleItemSelect = (itemId) => {
    setSelectedItems((prevState) => {
      if (prevState.includes(itemId)) {
        return prevState.filter((id) => id !== itemId);
      } else {
        return [...prevState, itemId];
      }
    });
  };

  // 全选/取消全选处理
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]); // 取消全选
    } else {
      const allIds = filteredData.map((item) => item.id);
      setSelectedItems(allIds); // 全选
    }
    setSelectAll(!selectAll); // 切换按钮文本
  };

  // 重置搜索
  const handleReset = () => {
    setSearchText("");
    setSelectedCategory("");
    setDateRange([null, null]);
    setSelectedItems([]);
    setSelectAll(false);
    setFilteredData(data);
  };

  // 筛选后的结果
  const [filteredData, setFilteredData] = useState(data);

  // 设置表格的列
  const columns = [
    {
      title: "Select",
      dataIndex: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedItems.includes(record.id)}
          onChange={() => handleItemSelect(record.id)}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        {/* 关键字搜索 */}
        <Input
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearchChange}
          style={{ width: "300px" }}
        />

        {/* 分类选择 */}
        <Select
          placeholder="Select category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ width: "300px" }}
        >
          <Option value="category1">Category 1</Option>
          <Option value="category2">Category 2</Option>
          <Option value="category3">Category 3</Option>
        </Select>

        {/* 日期范围选择 */}
        <RangePicker
          value={dateRange}
          onChange={handleDateRangeChange}
          style={{ width: "300px" }}
        />

        {/* 筛选按钮 */}
        <Button type="primary" onClick={handleFilter}>
          Apply Filters
        </Button>
        {/* 重置按钮 */}
        <Button onClick={handleReset}>Reset Filters</Button>

        {/* 全选/取消全选按钮 */}
        <Button onClick={handleSelectAll} style={{ marginTop: "10px" }}>
          {selectAll ? "Deselect All" : "Select All"}
        </Button>

        {/* 显示筛选后的结果 */}
        <Table
          rowKey="id"
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          style={{ marginTop: "20px" }}
        />
      </Space>
    </div>
  );
};

export default FilterAnt;
