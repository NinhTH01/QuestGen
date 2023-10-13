import { Button, Row, Col, Form } from "react-bootstrap";
import styles from "./QuizDashboard.module.css";
import { ReactSortable } from "react-sortablejs";
import React, { ChangeEvent } from "react";
import {VerticalAlignBottomOutlined } from "@mui/icons-material";
import {Document, Page, pdfjs } from "react-pdf";
import { Pagination } from "antd";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const QuizDashboard: React.FC<QuizDashboardProps> = ({
  isEdit,
  setArray,
  setEdit,
  array,
  handleChange,
  handleChecked,
  handleQuestion,
  handleGenQuest,
}) => {
  const [count, setCount] = React.useState(1);

  const [level, setLevel] = React.useState<string>("0");

  const [fileList, setFileList] = React.useState<any>("");

  const [pdfData, setPdfData] = React.useState<any>("");

  const [language, setLanguage] = React.useState<string>('Tiếng Việt');

  const [type, setType] = React.useState<string>('mcq');

  const [numPages, setNumPages] = React.useState<number>();

  const [pageNumber, setPageNumber] = React.useState<number>(1);

  const handleFileChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  },[])

  const files = React.useMemo(() => {return fileList ? [...fileList] : []},[fileList])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    // console.log(numPages);
    setNumPages(numPages);
  }

  const handleChangePage = React.useCallback((index:any) => {
    setPageNumber(index);
  },[])



  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

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
        setPdfData(data.files[`file-${0}`])
      })
      .catch((err) => console.error(err));
  };

  console.log(array[array.length - 1]?.type)

  const AnswerComponent = React.useMemo(() => {
    if(array.length > 0 ) {
      if(array[array.length - 1]?.type === 'mcq' || array[array.length -1]?.type === 'fill') {
        return (
          <>
            {isEdit ? ( 
            <ReactSortable list={array} setList={setArray}>
              {array?.map((value: any, _index: number) => {
                return (
                  <Form
                    className={`p-4 bg-white m-4 ${styles.shadowAnswerBox} rounded-2`}
                    key={_index}
                  >
                    <Form.Control
                      as={"textarea"}
                      id="inputPassword5"
                      className="fw-bold mb-2"
                      placeholder={value?.question}
                      value={value?.question}
                      style={{ fontSize: 18 }}
                      onChange={handleQuestion(_index)}
                    />

                    {value?.options?.map((answer: any, index: number) => {
                      return (
                        <div className="d-flex align-items-center" key={index}>
                          <Form.Check
                            defaultChecked={
                              index === value.correctAnswerIndices
                            }
                            onClick={handleChecked(index, _index)}
                            inline
                            name="group1"
                            type={"radio"}
                            id={`inline-${"radio"}-${index}`}
                          />
                          <Form.Control
                            as={"textarea"}
                            id="inputPassword5"
                            className={`${
                              index === value.correctAnswerIndices
                                ? "fw-bold"
                                : "fw-medium"
                            } text-black mt-2`}
                            style={{ marginRight: 0 }}
                            placeholder={answer}
                            onChange={handleChange(index, _index)}
                            value={answer}
                          />
                        </div>
                      );
                    })}
                  </Form>
                );
              })}
            </ReactSortable>
          ) : (
            array?.map((value: any, index: number) => {
              return (
                <div
                  className={`p-4 bg-white m-4 ${styles.shadowAnswerBox} rounded-2`}
                  key={index}
                >
                  <h5 className="mb-4 fw-bold">{value?.question}</h5>
                  {value?.options?.map((answer: any, index: number) => (
                    <h6
                      key={index}
                      className={`${
                        index === value.correctAnswerIndices
                          ? "fw-bold"
                          : "fw-medium"
                      } m-2`}
                      style={{
                        color:
                          index === value?.correctAnswerIndices
                            ? "rgb(22,163,74)"
                            : "black",

                        fontSize: 16,
                      }}
                    >{`-      ${answer}`}</h6>
                  ))}
                </div>
              );
            })
          )}
          </>
        )
    } else if(array[array.length - 1]?.type === 'tf' ){
      return (
        <>
          {isEdit ? (
            <ReactSortable list={array} setList={setArray}>
              {array?.map((value: any, _index: number) => {
                return (
                  <Form
                    className={`p-4 bg-white m-4 ${styles.shadowAnswerBox} rounded-2`}
                    key={_index}
                  >
                    <Form.Control
                      as={"textarea"}
                      id="inputPassword5"
                      className="fw-bold mb-2"
                      placeholder={value?.question}
                      value={value?.question}
                      style={{ fontSize: 18 }}
                      onChange={handleQuestion(_index)}
                    />

                    <div className="d-flex align-items-center">
                      <Form.Check
                        defaultChecked={value?.answer === "True"}
                        onClick={handleChecked(0, _index)}
                        inline
                        name="group1"
                        type={"radio"}
                        id={`inline-${"radio"}-${0}`}
                      />
                      <h5
                        className={`${
                          value?.answer === "True" ? "fw-bold" : "fw-medium"
                        } text-black mt-2`}
                      >
                        Đúng
                      </h5>
                    </div>

                    <div className="d-flex align-items-center">
                      <Form.Check
                        defaultChecked={value?.answer === "False"}
                        onClick={handleChecked(1, _index)}
                        inline
                        name="group1"
                        type={"radio"}
                        id={`inline-${"radio"}-${1}`}
                      />
                      <h5
                        className={`${
                          value?.answer === "False" ? "fw-bold" : "fw-medium"
                        } text-black mt-2`}
                      >
                        Sai
                      </h5>
                    </div>
                  </Form>
                );
              })}
            </ReactSortable>
          ) : (
            array?.map((value: any, index: number) => {
              return (
                <div
                  className={`p-4 bg-white m-4 ${styles.shadowAnswerBox} rounded-2`}
                  key={index}
                >
                  <h5 className="mb-4 fw-bold">{value?.question}</h5>

                  <h6
                    className={`${
                      value?.answer === "True" ? "fw-bold" : "fw-medium"
                    } m-2`}
                    style={{
                      color:
                        value?.answer === "True" ? "rgb(22,163,74)" : "black",

                      fontSize: 16,
                    }}
                  >{`- Đúng`}</h6>
                  <h6
                    className={`${
                      value?.answer === "False" ? "fw-bold" : "fw-medium"
                    } m-2`}
                    style={{
                      color:
                        value?.answer === "False" ? "rgb(22,163,74)" : "black",

                      fontSize: 16,
                    }}
                  >{`- Sai`}</h6>
                </div>
              );
            })
          )}
        </>
      )
    } else {
      return <></>
    }
    } else {
      return <> </>
    }
    
  },[array, handleChange, handleChecked, handleQuestion, isEdit, setArray])


  return (
    <>
      <h5 className="text-center fw-bold mt-4">
        Tạo các loại câu hỏi từ file PDF 
      </h5>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col className="bg-light" style={{ padding: 60 }}>
          <div className="mb-4">
            <h6 style={{ fontWeight: 400 }} className=" fw-bold ">
              Chọn File PDF và tạo câu hỏi từ nội dung của file
            </h6>
          </div>

          {/* <div className="d-flex justify-content-center mb-4">
            <Form.Control
              as={"textarea"}
              id="inputPassword5"
              className="fw-medium text-black"
              style={{ height: 300 }}
              value={content}
              onChange={handleChangeContent}
            />
          </div> */}

          <div className="my-4">
           
            <div className={`${styles.fileupload} mb-2`}>
              <div className="d-flex justify-content-center align-content-center align-items-center">
             {files.length > 0 ? <h5 className="mt-2 overflow-hidden "  
            style={{
              textOverflow: "ellipsis",
            // width: '100%',
            // height: '100%',
              textDecoration: "none",
              overflowX: "hidden",
            }}> {files[0].name}</h5>:<><h5 className="mt-2"> {"Bấm để chọn file"}</h5>
              <VerticalAlignBottomOutlined /></>  }
             
                </div>
           
              <input type="file" onChange={handleFileChange} accept="application/pdf"/>
            </div>
            
              {/* {files.length > 0 && (<Button  style={{ width: "100%" }} 
            className=" fw-bold mt-2" onClick={handleUploadClick}>Upload File
            </Button>)} */}
              
           
          </div>

          <Row
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{
              width: "100%",
              marginLeft: 1,
              marginTop: 16,
            }}
          >
            <Col style={{ paddingLeft: 0 }}>
              <h6 className="fw-medium px-1" style={{ fontSize: 15 }}>
                Ngôn ngữ đầu ra
              </h6>
              <Form.Select
                aria-label="Default select example"
                value={language}
                onChange={(e: any) => setLanguage(e.currentTarget.value)}
              >
                <option value="Tiếng Việt">Tiếng Việt</option>
                <option value="English">Tiếng Anh</option>
              </Form.Select>

            </Col>

            <Col style={{ paddingRight: 0 }}>
              <h6 className="fw-medium px-1" style={{ fontSize: 15 }}>
                Loại câu hỏi
              </h6>

              <Form.Select
                aria-label="Default select example"
                value={type}
                onChange={(e: any) => setType(e.currentTarget.value)}
              >
                <option value="mcq">Trắc nghiệm</option>
                <option value="tf">Đúng/Sai</option>
                <option value="fill">Điền chỗ trống</option>
              </Form.Select>
            </Col>
          </Row>
        
          <Row
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{
              width: "100%",
              marginLeft: 1,
              marginTop: 16,
            }}
          >
            <Col style={{ paddingLeft: 0 }}>
              <h6 className="fw-medium px-1" style={{ fontSize: 15 }}>
                Số lượng
              </h6>
              <Form.Select
              value={count}
                aria-label="Default select example"
                onChange={(e: any) => setCount(e.currentTarget.value)}
              >
                
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Col>

            <Col style={{ paddingRight: 0 }}>
              <h6 className="fw-medium px-1" style={{ fontSize: 15 }}>
                Độ khó
              </h6>

              <Form.Select
                aria-label="Default select example"
                value={level}
                onChange={(e: any) => setLevel(e.currentTarget.value)}
              >
                  <option value="0">Dễ</option>
                <option value="1">Trung bình</option>
                <option value="2">Khó</option>
              </Form.Select>
            </Col>
          </Row>
          <Button
            style={{ width: "100%" }}
            className="mt-4 fw-bold"
            onClick={() =>
              handleGenQuest(fileList, type, level, count, language)
            }
          >
            Tạo câu hỏi
          </Button>

          <div>
{fileList && <Button  style={{ width: "50%" }} className="mt-4 fw-bold" onClick={handleUploadClick}>
              Xem trước
            </Button>}
            {pdfData &&  
      <div style={{width: 500}}>
        <div style={{width: 500}} className="mt-4 d-flex justify-content-center align-items-center align-content-center"> 
         <Pagination defaultCurrent={pageNumber} total={numPages} onChange={handleChangePage}  pageSize={1}/>
          
        </div>
    
    
        <Document file={pdfData} className="mt-4" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={500} />
        </Document>
      </div>}
  
      
    </div>
    
        </Col>
        <Col className=" bg-light">
          {array.length > 0 && (
            <div className=" justify-content-end d-flex p-4">
              <Button
                style={{ marginRight: 16 }}
                className="px-4 rounded-2 fw-bold"
                onClick={() => setEdit(!isEdit)}
              >
                {`${isEdit ? "SAVE" : "EDIT"}`}
              </Button>
              <Button className="px-4 rounded-2 fw-bold">EXPORT</Button>
            </div>
          )}

     {AnswerComponent}


        </Col>
      </Row>
      
    </>
  );
};
export interface QuizDashboardProps {
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
    content: any,
    type: string,
    level: string,
    count: number,
    language: string,
  ) => void;
}

export default QuizDashboard;
