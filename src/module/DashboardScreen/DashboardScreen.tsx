import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import styles from "./DashboardScreen.module.css";
import React from "react";
import { data } from "../../sample/data/sampleGen";
import { ReactSortable } from "react-sortablejs";

const DashboardScreen = () => {
  const [width, setWidth] = React.useState<number>(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  React.useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [isEdit, setEdit] = React.useState<boolean>(false);

  const [array, setArray] = React.useState<any>(data);

  const handle = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => (e: any) => {
      array[indexQuestion].answers[indexAnswer] = e.target.value;
      setArray([...array]);
    },
    [array]
  );

  const handleChecked = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => async () => {
      array[indexQuestion].correctAnswerIndices = [indexAnswer];

      setArray([...array]);
    },
    [array]
  );

  console.log(array);

  return (
    <>
      <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1} style={{ width: "100%" }}>
        <Col>
          {width > 800 && (
            <div className="p-2 " style={{ position: "fixed", top: 0 }}>
              <Sidebar />
            </div>
          )}
        </Col>
        <Col
          style={{
            width: width > 800 ? "calc(100% - 200px)" : "100%",
            marginLeft: width > 800 ? 220 : 0,
            height: "99vh",
          }}
        >
          <div className="p-2">
            <div className="bg-white">
              <div className=" justify-content-end d-flex p-4">
                <Button
                  style={{ marginRight: 16, background: "rgb(99 102 241)" }}
                  className="px-4 rounded-5 py-2"
                >
                  Sign up
                </Button>
                <Button
                  className="px-4 rounded-5 py-2"
                  style={{ marginRight: 16, background: "rgb(99 102 241)" }}
                >
                  Log in
                </Button>
              </div>

              <h5 className="text-center fw-bold">
                Generate different quizzes like MCQs, True or False,
                Fill-in-the-blanks, FAQs etc
              </h5>
              <Row
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                sm={2}
                xs={1}
                style={{ width: "100%" }}
              >
                <Col className="bg-light" style={{ padding: 28 }}>
                  <h6>Questions? Write to: ramsri@questgen.ai</h6>
                  <h6>
                    Suggested text length: 50 - 3000 words. Supports English and
                    other major languages
                  </h6>
                  <h6>Word Count: </h6>

                  <div className="d-flex justify-content-center mb-4">
                    <Form.Control
                      as={"textarea"}
                      id="inputPassword5"
                      className="fw-medium text-black"
                      style={{ height: 300 }}
                      placeholder={
                        "Elon Musk has shown again he can influence the digital currency market with just his tweets. After saying that his electric vehicle-making company Tesla will not accept payments in Bitcoin because of environmental concerns, he tweeted that he was working with developers of Dogecoin to improve system transaction efficiency. Following the two distinct statements from him, the world's largest cryptocurrency hit a two-month low, while Dogecoin rallied by about 20 percent. The SpaceX CEO has in recent months often tweeted in support of Dogecoin, but rarely for Bitcoin.  In a recent tweet, Musk put out a statement from Tesla that it was concerned about the rapidly increasing use of fossil fuels for Bitcoin (price in India) mining and transaction, and hence was suspending vehicle purchases using the cryptocurrency. A day later he again tweeted saying, To be clear, I strongly believe in crypto, but it can't drive a massive increase in fossil fuel use, especially coal. It triggered a downward spiral for Bitcoin value but the cryptocurrency has stabilised since.  A number of Twitter users welcomed Musk's statement. One of them said it's time people started realising that Dogecoin is here to stay and another referred to Musk's previous assertion that crypto could become the world's future currency."
                      }
                    />
                  </div>
                  <Form.Select aria-label="Default select example">
                    <option>MCQ</option>
                    <option value="1">MCQ(Multiple Correct Answers)</option>
                    <option value="2">TrueFalse</option>
                    <option value="3">Fill in the blanks</option>
                    <option value="4">FAQ</option>
                    <option value="5">Higher Order QA</option>
                  </Form.Select>
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
                      <Form.Select aria-label="Default select example">
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

                      <Form.Select aria-label="Default select example">
                        <option>Easy</option>
                        <option value="1">Medium</option>
                        <option value="2">Hard</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Button style={{ width: "100%" }} className="mt-4">
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
                              className="fw-bold mb-2"
                              placeholder={value?.question}
                              style={{ fontSize: 18 }}
                            />

                            {value?.answers?.map(
                              (answer: any, index: number) => {
                                return (
                                  <div
                                    className="d-flex align-items-center"
                                    key={index}
                                  >
                                    <Form.Check
                                      checked={
                                        index === value.correctAnswerIndices[0]
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
                                        index === value.correctAnswerIndices[0]
                                          ? "fw-bold"
                                          : "fw-medium"
                                      } text-black mt-2`}
                                      style={{ marginRight: 0 }}
                                      placeholder={answer}
                                      onChange={handle(index, _index)}
                                    />
                                  </div>
                                );
                              }
                            )}
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
                          {value?.answers?.map((answer: any, index: number) => (
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
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default DashboardScreen;
