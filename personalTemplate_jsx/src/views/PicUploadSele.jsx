import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../style/FilterSele.module.scss";
const { Meta } = Card;

const PicUploadSele = () => {
  const navigate = useNavigate();

  return (
    <Row gutter={24} className={styles.filterSeleRow}>
      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/picupload/picuploadAnt")}
        >
          <Meta
            title="Ant Design 图片上传"
            description="基于 Ant Design 的图片上传展示"
          />
        </Card>
      </Col>

      <Col>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={() => navigate("/picupload/picuploadRaw")}
        >
          <Meta title="原生图片上传" description="不使用 UI 库的纯原生实现" />
        </Card>
      </Col>
    </Row>
  );
};

export default PicUploadSele;
