import { Button, Row, Col, Form } from "react-bootstrap";
import styles from "./SimiliarDashboard.module.css";
import { ReactSortable } from "react-sortablejs";
import React from "react";

const SimiliarDashboard: React.FC<SimiliarDashboardProps> = ({
  isEdit,
  setArray,
  setEdit,
  array,
  handleQuestion,
}) => {
  const [content, setContent] = React.useState<string>(
    "Two trains are on the same track a distance 100 km apart heading towards one another, each at a speed of 50 km/h. A fly starting out at the front of one train, flies towards the other at a speed of 75 km/h. Upon reaching the other train, the fly turns around and continues towards the first train. How many kilometers does the fly travel before getting squashed in the collision of the two trains?"
  );

  const characterCount = React.useMemo(() => {
    return content.length;
  }, [content.length]);

  const handleChangeContent = React.useCallback((e: any) => {
    setContent(e.target.value);
  }, []);

  return (
    <>
      <h5 className="text-center fw-bold mt-4">
        Generate similar questions to expand your question bank.
      </h5>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col className="bg-light" style={{ padding: 60 }}>
          <div className="mb-4">
            <h6 style={{ fontWeight: 400 }}>
              Questions? Write to: ramsri@questgen.ai
            </h6>
          </div>
          <div className="my-4">
            <h6 style={{ fontWeight: 400 }}>
              Suggested text length: less than 120 words. Supports English.
            </h6>
          </div>

          <h6 style={{ fontWeight: 600, color: "green", fontSize: 14 }}>
            Word Count:{characterCount}
          </h6>

          <div className="d-flex justify-content-center mb-4">
            <Form.Control
              as={"textarea"}
              id="inputPassword5"
              className="fw-medium text-black"
              style={{ height: 300 }}
              placeholder={content}
              value={content}
              onChange={handleChangeContent}
            />
          </div>

          <Button style={{ width: "100%" }} className="mt-4 fw-bold">
            Try for free
          </Button>
        </Col>
        <Col className=" bg-light">
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
                      className="fw-medium mb-2"
                      placeholder={value?.question}
                      style={{ fontSize: 18, height: 300 }}
                      value={value?.question}
                      onChange={handleQuestion(_index)}
                    />
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
                  <p className="mb-4 fw-medium" style={{ fontSize: 18 }}>
                    {value?.question}
                  </p>
                </div>
              );
            })
          )}
        </Col>
      </Row>
    </>
  );
};
export interface SimiliarDashboardProps {
  array: any;

  setArray: React.Dispatch<any>;

  isEdit: boolean;

  setEdit: React.Dispatch<React.SetStateAction<boolean>>;

  handleQuestion: (indexQuestion: number) => (e: any) => void;

  handleGenQuest: (content: string, type: string, level: string) => void;
}

export default SimiliarDashboard;
