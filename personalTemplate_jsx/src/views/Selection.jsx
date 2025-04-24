import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../style/FilterSele.module.scss";
const { Meta } = Card;

const Selection = () => {
  const navigate = useNavigate();

  return (
    <Row gutter={24} className={styles.filterSeleRow}>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/filter")}
        >
          <Meta title="筛选器" description="" />
        </Card>
      </Col>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/paginatedpage")}
        >
          <Meta title="分页" description="" />
        </Card>
      </Col>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/sort")}
        >
          <Meta title="排序" description="" />
        </Card>
      </Col>
    </Row>
  );
};

export default Selection;
