// src/FilterSele.jsx
import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./styles/FilterSele.module.scss";
const { Meta } = Card;

const FilterSele = () => {
  const navigate = useNavigate();

  return (
    <Row gutter={24} className={styles.filterSeleRow}>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/filter/ant")}
        >
          <Meta
            title="Ant Design 筛选器"
            description="基于 Ant Design 的完整筛选器"
          />
        </Card>
      </Col>

      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/filter/raw")}
        >
          <Meta title="原生筛选器" description="不使用 UI 库的纯原生实现" />
        </Card>
      </Col>
    </Row>
  );
};

export default FilterSele;
