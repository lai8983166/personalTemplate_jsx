import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

// 可复用的 Card 组件
const SelecTable = ({ title, description, route }) => {
  const navigate = useNavigate();

  return (
    <Card hoverable style={{ width: 240 }} onClick={() => navigate(route)}>
      <Meta title={title} description={description} />
    </Card>
  );
};

export default SelecTable;
