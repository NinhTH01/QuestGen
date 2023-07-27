import { Button, Row, Col, Form } from "react-bootstrap";
import styles from "./BloomDashboard.module.css";
import { ReactSortable } from "react-sortablejs";
import React from "react";

const BloomDashboard: React.FC<BloomDashboardProps> = ({
  isEdit,
  setArray,
  setEdit,
  array,
  handleChange,
  handleChecked,
  handleQuestion,
}) => {
  const [content, setContent] = React.useState<string>(
    "Elon Musk has shown again he can influence the digital currency market with just his tweets. After saying that his electric vehicle-making company Tesla will not accept payments in Bitcoin because of environmental concerns, he tweeted that he was working with developers of Dogecoin to improve system transaction efficiency. Following the two distinct statements from him, the world's largest cryptocurrency hit a two-month low, while Dogecoin rallied by about 20 percent. The SpaceX CEO has in recent months often tweeted in support of Dogecoin, but rarely for Bitcoin.  In a recent tweet, Musk put out a statement from Tesla that it was concerned about the rapidly increasing use of fossil fuels for Bitcoin (price in India) mining and transaction, and hence was suspending vehicle purchases using the cryptocurrency. A day later he again tweeted saying, To be clear, I strongly believe in crypto, but it can't drive a massive increase in fossil fuel use, especially coal. It triggered a downward spiral for Bitcoin value but the cryptocurrency has stabilised since.  A number of Twitter users welcomed Musk's statement. One of them said it's time people started realising that Dogecoin is here to stay and another referred to Musk's previous assertion that crypto could become the world's future currency."
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
        Generate questions on different levels of Bloom's Taxonomy.
      </h5>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col className="bg-light" style={{ padding: 60 }}>
          <div className="mb-4">
            <h6 style={{ fontWeight: 400 }}>
              Questions? Write to: ramsri@questgen.ai
            </h6>
          </div>
          <div className="mb-4">
            <h6 style={{ fontWeight: 400 }}>
              Suggested text length: 50 - 1000 words. Supports English.
            </h6>
          </div>
          <h6 style={{ fontWeight: 600, color: "green", fontSize: 14 }}>
            Character Count: {characterCount}
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
                    <h6 className=" text-danger fw-bold mb-4">
                      {" "}
                      {value?.context}{" "}
                    </h6>
                    <Form.Control
                      as={"textarea"}
                      id="inputPassword5"
                      className="fw-bold mb-2"
                      placeholder={value?.question}
                      style={{ fontSize: 18 }}
                      value={value?.question}
                      onChange={handleQuestion(_index)}
                    />

                    {value?.answers?.map((answer: any, index: number) => {
                      return (
                        <div className="d-flex align-items-center" key={index}>
                          {value?.context}{" "}
                          <Form.Check
                            checked={true}
                            onClick={handleChecked(index, _index)}
                            inline
                            name="group1"
                            type={"radio"}
                            id={`inline-${"radio"}-${index}`}
                          />
                          <Form.Control
                            as={"textarea"}
                            id="inputPassword5"
                            className={`${"fw-bold"} text-black mt-2`}
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
                  <h6 className=" text-danger fw-bold mb-4">
                    {" "}
                    {value?.context}{" "}
                  </h6>
                  <h5 className="mb-4 fw-bold">{value?.question}</h5>
                  {value?.answers?.map((answer: any, index: number) => (
                    <h6
                      key={index}
                      className={`${"fw-bold"} m-2`}
                      style={{
                        color: "rgb(22,163,74)",
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
}

export default BloomDashboard;
