import { Button, Row, Col } from "react-bootstrap";
import styles from "./ImageDashboard.module.css";
import React from "react";
import {
  Document,
  Page,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { VerticalAlignBottomOutlined } from "@mui/icons-material";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

const ImageDashboard: React.FC<ImageDashboardProps> = ({
  isEdit,
  setArray,
  setEdit,
  array,
  handleChange,
  handleChecked,
  handleQuestion,
  handleGenQuest,
}) => {
  const [fileList, setFileList] = React.useState<any>("");

  const [loading, setLoading] = React.useState<boolean>(false);

  const files = fileList ? [...fileList] : [];

  const [pdfData, setPdfData] = React.useState<any>([]);

  const handleFileChange = (e: any) => {
    setFileList(e.target.files);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }
    if(loading === false) {
      setLoading(true);
      const data = new FormData();
      files.forEach((file, i) => {
        data.append(`file-${i}`, file, file.name);
      });
  
      fetch("https://httpbin.org/post", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
        
          let contentArray: any = [];
  
          files.forEach((file, i) => {
            contentArray.push(data.files[`file-${i}`]);
          });
          setPdfData(contentArray);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  console.log(loading);

  const MyDocument = () => (
    <Document>
      <Page>
        {pdfData.length > 0 &&
          pdfData.map((data: any) => {
            return <Image src={data} />;
          })}
      </Page>
    </Document>
  );

  return (
    <>
      <h5 className="text-center fw-bold mt-4 mb-4">
        Tạo file PDF từ một hoặc nhiều ảnh
      </h5>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col className="bg-light" style={{ padding: 60 }}>
          <div className="mb-4 ">
            <h6 style={{ fontWeight: 400 }} className="fw-bold">
              Chọn một hoặc nhiều ảnh rồi bấm tải ảnh lên để tạo file PDF
            </h6>
          </div>

          <div className="my-4">
            <div className={`${styles.fileupload} mb-2`}>
              <div className="d-flex justify-content-center align-content-center align-items-center">
                {files.length > 0 ? (
                  <h5
                    className="mt-2 overflow-hidden "
                    style={{
                      textOverflow: "ellipsis",
                      // width: '100%',
                      // height: '100%',
                      textDecoration: "none",
                      overflowX: "hidden",
                    }}
                  >
                    {`${fileList.length} ảnh đã được chọn`}
                  </h5>
                ) : (
                  <>
                    <h5 className="mt-2"> {"Bấm để chọn file"}</h5>
                    <VerticalAlignBottomOutlined />
                  </>
                )}
              </div>

              <input
                type="file"
                onChange={handleFileChange}
                multiple
              />
            </div>
          </div>

          <ul>
                {files.length >= 0 &&
                  files.map((file, i) => (
                    <li key={i}>
                      <h6  className="mt-2 overflow-hidden "
                    style={{
                      textOverflow: "ellipsis",
                      textDecoration: "none",
                      overflowX: "hidden",
                    }}>
                      {file.name} 
                      </h6>
                      
                    </li>
                  ))}
              </ul>

          {files.length > 0 && (
     
              <Button className="mt-4 fw-bold" onClick={handleUploadClick} style={{width: '50%'}}>
                {loading === false ? (`Tải ảnh lên`): (<Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />} />)}
                
              </Button>
           
          )}
        </Col>
        <Col className=" bg-light d-flex justify-content-center">
          <PDFViewer style={{ height: '98vh', width: "80%" }}>
            <MyDocument />
          </PDFViewer>
        </Col>
      </Row>
    </>
  );
};
export interface ImageDashboardProps {
  array: any;

  setArray: React.Dispatch<any>;

  isEdit: boolean;

  setEdit: React.Dispatch<React.SetStateAction<boolean>>;

  handleChange: (
    indexAnswer: number,
    indexQuestion: number
  ) => (e: any) => void;

  handleChecked: (indexAnswer: number, indexQuestion: number) => () => void;

  handleQuestion: (indexQuestion: number) => (e: any) => void;

  // answer: any;

  handleGenQuest: (
    content: string,
    type: string,
    level: string,
    count: number,
    language: string
  ) => void;
}

export default ImageDashboard;
