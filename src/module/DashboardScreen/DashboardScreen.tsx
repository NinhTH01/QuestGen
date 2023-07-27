import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import styles from "./DashboardScreen.module.css";
import React from "react";
import { bloomData, data, similiarData } from "../../sample/data/sampleGen";
import HomeDashboard from "../../components/templates/HomeDashboard/HomeDashboard";
import BloomDashboard from "../../components/templates/BloomDashboard/BloomDashboard";
import SimiliarDashboard from "../../components/templates/SimiliarDashboard/SimiliarDashboard";
import AccountDashboard from "../../components/templates/AccountDashboard/AccountDashboard";

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

  const [route, setRoute] = React.useState<number>(0);

  const [isEdit, setEdit] = React.useState<boolean>(false);

  const [array, setArray] = React.useState<any>(data);

  const [bloomArray, setBloomArray] = React.useState<any>(
    bloomData?.quesAndPair
  );

  const [similiarArray, setSimiliarArray] = React.useState<any>(
    similiarData?.quesAndPair
  );

  const handleChangeQuestion = React.useCallback(
    (indexQuestion: number) => (e: any) => {
      if (route === 0) {
        array[indexQuestion].question = e.target.value;
        setArray([...array]);
      } else if (route === 1) {
        bloomArray[indexQuestion].question = e.target.value;
        setBloomArray([...bloomArray]);
      } else if (route === 2) {
        similiarArray[indexQuestion].question = e.target.value;
        setSimiliarArray([...similiarArray]);
      }
    },
    [array, bloomArray, route, similiarArray]
  );

  const handleChange = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => (e: any) => {
      if (route === 0) {
        array[indexQuestion].answers[indexAnswer] = e.target.value;
        setArray([...array]);
      } else if (route === 1) {
        bloomArray[indexQuestion].answers[indexAnswer] = e.target.value;
        setBloomArray([...bloomArray]);
      }
    },
    [array, bloomArray, route]
  );

  const handleChecked = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => () => {
      if (route === 0) {
        array[indexQuestion].correctAnswerIndices = [indexAnswer];

        setArray([...array]);
      }
    },
    [array, route]
  );

  const RouteComponent = React.useMemo(() => {
    if (route === 0) {
      return (
        <HomeDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setArray}
          array={array}
          handleChange={handleChange}
          handleChecked={handleChecked}
          handleQuestion={handleChangeQuestion}
        />
      );
    } else if (route === 1) {
      return (
        <BloomDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setBloomArray}
          array={bloomArray}
          handleChange={handleChange}
          handleChecked={handleChecked}
          handleQuestion={handleChangeQuestion}
        />
      );
    } else if (route === 2) {
      return (
        <SimiliarDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setSimiliarArray}
          array={similiarArray}
          handleQuestion={handleChangeQuestion}
        />
      );
    } else if (route === 3) {
      return <AccountDashboard />;
    }
  }, [
    array,
    bloomArray,
    handleChange,
    handleChangeQuestion,
    handleChecked,
    isEdit,
    route,
    similiarArray,
  ]);

  return (
    <div style={{ width: "100%" }} className="bg-light">
      <Row
        xxl={2}
        xl={2}
        lg={2}
        md={2}
        sm={2}
        xs={1}
        style={{ width: "100%" }}
        className="bg-light"
      >
        <Col>
          {width > 800 && (
            <div className="p-2" style={{ position: "fixed", top: 0 }}>
              <Sidebar route={route} setRoute={setRoute} />
            </div>
          )}
        </Col>
        <Col
          style={{
            width: width > 800 ? "calc(100% - 208px)" : "100%",
            marginLeft: width > 800 ? 220 : 0,
            height: "99vh",
          }}
        >
          <div className="p-2">
            <div className="bg-light" style={{}}>
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
              {RouteComponent}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DashboardScreen;
