import React from "react";
import { Card } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Meta } = Card;

// 可复用的 Card 组件
const SeleTable = () => {
  const navigate = useNavigate();
  //const { title, description, route } = item;
  const { pageType } = useParams();
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        onClick={() => navigate(`${pageType}Ant`)}
      >
        <Meta title="Ant" description="Ant description" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        onClick={() => navigate(`${pageType}Raw`)}
      >
        <Meta title="Raw" description="Raw description" />
      </Card>
    </div>
  );
};

export default SeleTable;
