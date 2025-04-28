import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";

// 将 file 转换为 Base64 格式的函数
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function PicUploadAnt() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  // 处理文件预览
  const handlePreview = async (file) => {
    // 如果 file 没有 url 或 preview，使用 getBase64 转换文件为 Base64 格式
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  // 处理文件列表变化
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  // 上传按钮样式
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
        width: "200px", // 设置按钮宽度
        textAlign: "center", // 居中文本
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        draggable
        accept="image/*"
        style={{ width: "300px" }} // 设置上传框的宽度为 300px
      >
        <div style={{ textAlign: "center", padding: "20px" }}>
          {/* 提示文字 */}
          <p>可拖拽图片到此处或点击选择图片上传</p>
          {fileList.length >= 8 ? null : uploadButton}
        </div>
      </Upload>

      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
}

export default PicUploadAnt;
