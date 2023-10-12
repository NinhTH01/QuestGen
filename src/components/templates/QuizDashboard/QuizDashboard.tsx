import { Button, Row, Col, Form } from "react-bootstrap";
import styles from "./QuizDashboard.module.css";
import { ReactSortable } from "react-sortablejs";
import React, { ChangeEvent } from "react";
import { VerticalAlignBottomOutlined } from "@mui/icons-material";

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
  const [count, setCount] = React.useState(0);

  const [level, setLevel] = React.useState<string>("0");

  const [fileList, setFileList] = React.useState<FileList | null>(null);

  const [content, setContent] = React.useState<string>("");

  const handleChangeContent = React.useCallback((e: any) => {
    setContent(e.target.value);
  }, []);

  const handleFileChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  },[])


  const files = React.useMemo(() => {return fileList ? [...fileList] : []},[fileList])

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
        let contentArray = "";

        files.forEach((file, i) => {
          contentArray = contentArray + "\n" + data.files[`file-${i}`];
        });

        setContent(contentArray);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h5 className="text-center fw-bold mt-4">
        Generate different quizzes from file
      </h5>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col className="bg-light" style={{ padding: 60 }}>
          <div className="mb-4">
            <h6 style={{ fontWeight: 400 }}>
              Press Upload and file's content will appear in the editor(.txt
              file only)
            </h6>
          </div>

          <div className="d-flex justify-content-center mb-4">
            <Form.Control
              as={"textarea"}
              id="inputPassword5"
              className="fw-medium text-black"
              style={{ height: 300 }}
              value={content}
              onChange={handleChangeContent}
            />
          </div>

          <div className="my-4">
           
            <div className={`${styles.fileupload} mb-2`}>
              <div className="d-flex justify-content-center align-content-center align-items-center">
             
              <h5 className="mt-2"> {"Bấm để chọn file"}</h5>
              <VerticalAlignBottomOutlined />
                </div>
           
              <input type="file" onChange={handleFileChange} multiple/>
            </div>
              

              <ul>
                {files.length >= 1 &&
                  files.map((file, i) => (
                    <li key={i}>
                      {file.name} 
                    </li>
                  ))}
              </ul>

              <Button  style={{ width: "100%" }}
            className=" fw-bold" onClick={handleUploadClick}>Upload File
            </Button>
           
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
                Count
              </h6>
              <Form.Select
                aria-label="Default select example"
                onChange={(e: any) => setCount(e.currentTarget.value)}
              >
                <option>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Col>

            <Col style={{ paddingRight: 0 }}>
              <h6 className="fw-medium px-1" style={{ fontSize: 15 }}>
                Difficulty Level
              </h6>

              <Form.Select
                aria-label="Default select example"
                value={level}
                onChange={(e: any) => setLevel(e.currentTarget.value)}
              >
                <option value="0">Easy</option>
                <option value="1">Medium</option>
                <option value="2">Hard</option>
              </Form.Select>
            </Col>
          </Row>
          <Button
            style={{ width: "100%" }}
            className="mt-4 fw-bold"
            onClick={() =>
              handleGenQuest("content", "multiple choice", level, count)
            }
          >
            Try for free
          </Button>
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

          {isEdit ? (
            <ReactSortable list={array} setList={setArray}>
              {array?.map((value: any, _index: number) => {
                return (
                  <Form
                    className={`p-4 bg-white m-4 ${styles.shadowAnswerBox} rounded-2`}
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
                            checked={index === value.correctAnswerIndices[0]}
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
                              index === value.correctAnswerIndices[0]
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
                        index === value.correctAnswerIndices[0]
                          ? "fw-bold"
                          : "fw-medium"
                      } m-2`}
                      style={{
                        color:
                          index === value?.correctAnswerIndices[0]
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
    content: string,
    type: string,
    level: string,
    count: number
  ) => void;
}

export default QuizDashboard;