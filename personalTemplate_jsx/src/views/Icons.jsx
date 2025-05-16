import React from "react";
import { Row, Col, Card } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SmileOutlined,
  SearchOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  EditOutlined,
  DeleteOutlined,
  LikeOutlined,
  LogoutOutlined,
  MailOutlined,
  BellOutlined,
  FileTextOutlined,
  AppstoreAddOutlined,
  GithubOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MenuOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  BarsOutlined,
  DownCircleOutlined,
  RightCircleOutlined,
  VerticalAlignTopOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const iconStyle = {
  fontSize: "48px",
  color: "#1890ff",
  display: "block",
  margin: "10px auto",
};

const Icons = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>常用 Ant Design 图标</h1>
      <Row gutter={16} justify="center">
        <Col span={4}>
          <Card title="Home" hoverable>
            <HomeOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="User" hoverable>
            <UserOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Smile" hoverable>
            <SmileOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Search" hoverable>
            <SearchOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Settings" hoverable>
            <SettingOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Shopping Cart" hoverable>
            <ShoppingCartOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Edit" hoverable>
            <EditOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Delete" hoverable>
            <DeleteOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Like" hoverable>
            <LikeOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Logout" hoverable>
            <LogoutOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Mail" hoverable>
            <MailOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Notification" hoverable>
            <BellOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="File" hoverable>
            <FileTextOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Add App" hoverable>
            <AppstoreAddOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Github" hoverable>
            <GithubOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Twitter" hoverable>
            <TwitterOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Facebook" hoverable>
            <FacebookOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="LinkedIn" hoverable>
            <LinkedinOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Menu" hoverable>
            <MenuOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Appstore" hoverable>
            <AppstoreOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Unordered List" hoverable>
            <UnorderedListOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Bars" hoverable>
            <BarsOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Down Circle" hoverable>
            <DownCircleOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Right Circle" hoverable>
            <RightCircleOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Vertical Align Top" hoverable>
            <VerticalAlignTopOutlined style={iconStyle} />
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Menu Fold" hoverable>
            <MenuFoldOutlined style={iconStyle} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Icons;
