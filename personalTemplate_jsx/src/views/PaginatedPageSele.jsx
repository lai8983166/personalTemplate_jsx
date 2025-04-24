import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../style/FilterSele.module.scss";
const { Meta } = Card;

const PaginatedpageSele = () => {
  const navigate = useNavigate();

  return (
    <Row gutter={24} className={styles.filterSeleRow}>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/paginatedpage/paginatedpageAnt")}
        >
          <Meta
            title="Ant Design 分页"
            description="基于 Ant Design 的分页展示"
          />
        </Card>
      </Col>

      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/paginatedpage/paginatedpageRaw")}
        >
          <Meta title="原生分页" description="不使用 UI 库的纯原生实现" />
        </Card>
      </Col>
    </Row>
  );
};

export default PaginatedpageSele;
