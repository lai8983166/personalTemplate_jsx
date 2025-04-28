import React, { useState } from "react";
import "../style/PicUpload_raw.scss";

function PicUploadRaw() {
  const [files, setFiles] = useState([]); // 存储选择的文件
  const [progress, setProgress] = useState(0); // 上传进度
  const [uploading, setUploading] = useState(false); // 上传状态

  // 文件类型和大小验证
  const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      alert(`只能上传图片类型的文件（JPEG, PNG, GIF）`);
      return false;
    }
    if (file.size > maxSize) {
      alert("文件大小不能超过 5MB");
      return false;
    }
    return true;
  };

  // 文件选择事件处理
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(validateFile);
    setFiles((prevFiles) => [...prevFiles, ...validFiles]); // 保留之前的文件并添加新的文件
  };

  // 拖拽文件处理
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const selectedFiles = Array.from(e.dataTransfer.files);
    const validFiles = selectedFiles.filter(validateFile);
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  // 删除文件
  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // 处理文件上传
  const handleUpload = () => {
    if (files.length === 0) {
      alert("请先选择图片!");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload", true);

    // 设置上传进度
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        setProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        alert("图片上传成功");
        setProgress(0);
      } else {
        alert("图片上传失败");
      }
      setUploading(false);
    };

    xhr.onerror = () => {
      alert("图片上传失败");
      setUploading(false);
    };

    xhr.send(formData);
  };

  return (
    <div className="image-upload-container">
      <div
        className="drop-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>拖拽图片到这里进行上传，或者点击选择图片</p>
      </div>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input" className="upload-button">
        选择图片
      </label>

      <div className="file-previews">
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} className="file-preview">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <p>{file.name}</p>
              {/* 取消按钮 */}
              <button
                onClick={() => handleRemoveFile(index)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>

      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        {uploading ? `上传中... (${Math.round(progress)}%)` : "开始上传"}
      </button>

      {uploading && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${progress}%`,
              backgroundColor: "green",
              height: "5px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default PicUploadRaw;
