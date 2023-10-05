import { Button, Row, Col, Form } from "react-bootstrap";
import styles from "./QuizDashboard.module.css";
import { ReactSortable } from "react-sortablejs";
import React from "react";
import Editor from "../../organisms/Editor/Editor";
import { Upload, UploadProps, Button as antdButton, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { wait } from "@testing-library/user-event/dist/utils";

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

  const [type, setType] = React.useState("");

  const [level, setLevel] = React.useState<string>("0");

  const [image, setImage] = React.useState<any>([]);

  //   const handleImage = React.useCallback((event: any) => {
  //     console.log(event);
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       console.log(e);
  //     };
  //     reader.readAsText(event.target.files[0]);
  //     // if (event.target.files && event.target.files[0]) {
  //     //   setImage(URL.createObjectURL(event.target.files[0]));
  //     // }
  //   }, []);

  const arr: any = [];

  const handleTextFile = React.useCallback(async (event: any) => {
    // console.log(event);
    // const reader = new FileReader();
    // event.fileList.map((file: any) => {
    //   reader.onload = (e) => {
    //     console.log(e);
    //   };
    //   reader.readAsText(file);
    // });
    //   let files = new Promise((resolve) => {
    //     // Resolve the promise after reading file
    //     reader.onload = () => resolve(reader.result);
    //     // Reade the file as a text
    //     reader.readAsText(event);
    //   });
    //   // let res = await Promise.all(files);
    //   files.then((v) => setImage([...image, v]));
    // reader.onload = (e: any) => {
    //   if (event.type === "text/plain") {
    //     arr.push(e.target);
    //     setImage([...image, e.target]);
    //   } else {
    //   }
    // };
    // reader.readAsText(event);
    // setTimeout(function () {
    //   reader.onload = (e: any) => {
    //     if (event.type === "text/plain") {
    //       arr.push(e.target);
    //       setImage([...image, e.target]);
    //     } else {
    //     }
    //   };
    //   reader.readAsText(event);
    // }, 1000);
  }, []);

  console.log(arr);

  const content = React.useMemo(() => {
    // let array: any = [];
    // image.map((i: any) => {
    //   array = array + "\n" + i.result;
    // });
    // return array;
    return [];
  }, [image]);

  const props: UploadProps = {
    name: "file",
    multiple: true,
    // action: "https://httpbin.org/post",
    onChange: handleTextFile,
  };

  console.log(image, "1");

  const handleChane = React.useCallback(
    (data: any) => {
      setImage([...image, data]);
    },
    [image]
  );

  const dummyRequest = React.useCallback(
    ({ file, onSuccess }: any) => {
      fetch("https://httpbin.org/post", {
        method: "POST",
        body: file,
        // 👇 Set headers manually for single file upload
        headers: {
          "content-type": file.type,
          "content-length": `${file.size}`, // 👈 Headers need to be a string
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setImage([...image, data]);
        })
        .catch((err) => console.error(err));

      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    },
    [handleChane]
  );

  return (
    <>
      <h5 className="text-center fw-bold mt-4">
        Generate different quizzes from file
      </h5>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col className="bg-light" style={{ padding: 60 }}>
          <div className="mb-4">
            <h6 style={{ fontWeight: 400 }}>
              Questions? Write to: ramsri@questgen.ai
            </h6>
          </div>

          <div className="d-flex justify-content-center mb-4">
            <Form.Control
              as={"textarea"}
              id="inputPassword5"
              className="fw-medium text-black"
              style={{ height: 300 }}
              //   placeholder={content}
              value={content}
            />
          </div>

          <div className="my-4">
            {/* <input type="file" onChange={handleImage} multiple></input> */}
            <Upload
              {...props}
              className="text-black"
              customRequest={dummyRequest}
            >
              <Button>Click to Upload</Button>
            </Upload>
          </div>

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
