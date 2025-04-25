// src/FilterSele.jsx
import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../style/FilterSele.module.scss";
const { Meta } = Card;

const FormSele = () => {
  const navigate = useNavigate();

  return (
    <Row gutter={24} className={styles.filterSeleRow}>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/form/formAnt")}
        >
          <Meta
            title="Ant Design 筛选器"
            description="基于 Ant Design 的带验证表单"
          />
        </Card>
      </Col>

      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/form/formRaw")}
        >
          <Meta title="原生表单" description="不使用 UI 库的纯原生实现" />
        </Card>
      </Col>
    </Row>
  );
};

export default FormSele;
