import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../style/FilterSele.module.scss";
const { Meta } = Card;

const Selection = () => {
  const navigate = useNavigate();

  return (
    <div>
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
      <Row gutter={24} className={styles.filterSeleRow}>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => navigate("/form")}
          >
            <Meta title="表单" description="" />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => navigate("/picupload")}
          >
            <Meta title="图片上传" description="" />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => navigate("/icons")}
          >
            <Meta title="图标" description="" />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => navigate("/dragdrop")}
          >
            <Meta title="拖拽" description="" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Selection;
