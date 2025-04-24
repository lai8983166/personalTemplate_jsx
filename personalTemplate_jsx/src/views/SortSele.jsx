import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../style/FilterSele.module.scss";
const { Meta } = Card;

const SortSele = () => {
  const navigate = useNavigate();

  return (
    <Row gutter={24} className={styles.filterSeleRow}>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/sort/sortAnt")}
        >
          <Meta
            title="Ant Design 排序"
            description="基于 Ant Design 的排序展示"
          />
        </Card>
      </Col>

      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/sort/sortRaw")}
        >
          <Meta title="原生排序" description="不使用 UI 库的纯原生实现" />
        </Card>
      </Col>
    </Row>
  );
};

export default SortSele;
