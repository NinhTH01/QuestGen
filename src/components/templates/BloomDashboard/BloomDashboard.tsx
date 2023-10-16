import { Button, Row, Col, Form } from "react-bootstrap";
import styles from "./BloomDashboard.module.css";
import { ReactSortable } from "react-sortablejs";
import React from "react";
import Editor from "../../organisms/Editor/Editor";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const BloomDashboard: React.FC<BloomDashboardProps> = ({
  isEdit,
  setArray,
  setEdit,
  array,
  handleChange,
  handleChecked,
  handleQuestion,
  handleGenQuest,
  loading,
}) => {

  const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const [count, setCount] = React.useState(1);

  const [level, setLevel] = React.useState<string>("0");

  const [content, setContent] = React.useState<string>(
    DummyText
  );

  const [language, setLanguage] = React.useState<string>("Tiếng Việt");

  const handleEditorChange = React.useCallback((text: string) => {
    setContent(text);
  }, []);

  return (
    <>
      <h5 className="text-center fw-bold mt-4">Tạo các câu hỏi đúng/sai</h5>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col className="bg-light" style={{ padding: 60 }}>
          <div className="mb-4">
            <h6 style={{ fontWeight: 400 }} className=" fw-bold ">
              Nhập văn bản có nội dung bất kì. Hỗ trợ tốt với Tiếng Việt và
              Tiếng Anh
            </h6>
          </div>

          <div className="d-flex justify-content-center mb-4">
            <Editor
              handleQuestgen={handleGenQuest}
              type={"tf"}
              level={level}
              count={count}
              defaultValue={DummyText}
              handleEditorChange={handleEditorChange}
              language={language}
            />
          </div>
          <div>

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
                Số lượng
              </h6>
              <Form.Select
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
            onClick={() => handleGenQuest(content, "tf", level, count, language)}
          >
           {loading === false ? (`Tạo câu hỏi`): (<Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />} />)}
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
                {`${isEdit ? "Lưu" : "Sửa"}`}
              </Button>
              {/* <Button className="px-4 rounded-2 fw-bold">EXPORT</Button> */}
            </div>
          )}

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
        </Col>
      </Row>
    </>
  );
};
export interface BloomDashboardProps {
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

  handleGenQuest: (
    content: string,
    type: string,
    level: string,
    count: number,
    language: string,
  ) => void;

  loading: boolean,
}

export default BloomDashboard;
