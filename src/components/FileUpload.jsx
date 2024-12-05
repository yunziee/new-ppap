import { useState, useCallback } from "react";
import upload from "./../assets/icons/upload_blue.png";

const FileUpload = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((event) => {
    // dragover 이벤트 처리
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    // 파일을 드롭 영역 밖으로 옮겼을 경우
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    // 드롭 했을 때 이벤트 처리
    (event) => {
      event.preventDefault();
      setIsDragging(false);

      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        onFileUpload(event.dataTransfer.files);
        event.dataTransfer.clearData();
      }
    },
    [onFileUpload]
  );

  const handleFileSelect = useCallback(
    // 파일 탐색기 통해서 업로드
    (event) => {
      onFileUpload(event.target.files);
    },
    [onFileUpload]
  );

  return (
    <div
      className={`file-upload ${isDragging ? "dragging" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        multiple
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
      <label htmlFor="file-upload" className="file-upload-label">
        드래그 앤 드롭 하거나 클릭해서 파일을 업로드하세요.
      </label>
    </div>
  );
};

export default FileUpload;
