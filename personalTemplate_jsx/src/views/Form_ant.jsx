import React from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const FormAnt = () => {
  // 提交表单的处理函数
  const onFinish = (values) => {
    console.log("Success:", values);
    // 提示用户表单提交成功
    notification.success({
      message: "提交成功",
      description: `欢迎，${values.username}！表单已提交成功。`,
    });
  };

  // 表单验证失败的处理函数
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>用户注册</h2>
      <Form
        name="user_registration"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        {/* 用户名 */}
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: "请输入用户名" },
            { min: 3, message: "用户名至少3个字符" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="请输入用户名"
            autoComplete="on"
          />
        </Form.Item>

        {/* 邮箱 */}
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱地址" },
            { type: "email", message: "请输入有效的邮箱地址" },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="请输入邮箱"
            autoComplete="off"
          />
        </Form.Item>

        {/* 密码 */}
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            { min: 6, message: "密码至少6个字符" },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        {/* 确认密码 */}
        <Form.Item
          label="确认密码"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "请确认密码" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次密码不一致"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="请确认密码" />
        </Form.Item>

        {/* 提交按钮 */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormAnt;
