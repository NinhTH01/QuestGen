import { Button, Col, Row } from "react-bootstrap";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import React from "react";
import HomeDashboard from "../../components/templates/HomeDashboard/HomeDashboard";
import BloomDashboard from "../../components/templates/BloomDashboard/BloomDashboard";
import SimiliarDashboard from "../../components/templates/SimiliarDashboard/SimiliarDashboard";
import AccountDashboard from "../../components/templates/AccountDashboard/AccountDashboard";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import { useQuestgen } from "../../service/questgen-service";
import QuizDashboard from "../../components/templates/QuizDashboard/QuizDashboard";

const DashboardScreen = () => {
  const width = useSelector(currentWidth);

  const [route, setRoute] = React.useState<number>(0);

  const [isEdit, setEdit] = React.useState<boolean>(false);

  const [
    answer,
    setAnswer,
    handleGenQuest,
    handleChange,
    handleChecked,
    handleChangeQuestion,
  ] = useQuestgen(route);

  const RouteComponent = React.useMemo(() => {
    if (route === 0) {
      return (
        <HomeDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setAnswer}
          array={answer}
          handleChange={handleChange}
          handleChecked={handleChecked}
          handleQuestion={handleChangeQuestion}
          handleGenQuest={handleGenQuest}
        />
      );
    } else if (route === 1) {
      return (
        <BloomDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setAnswer}
          array={answer}
          handleChange={handleChange}
          handleChecked={handleChecked}
          handleQuestion={handleChangeQuestion}
          handleGenQuest={handleGenQuest}
        />
      );
    } else if (route === 2) {
      return (
        <SimiliarDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setAnswer}
          array={answer}
          handleQuestion={handleChangeQuestion}
          handleGenQuest={handleGenQuest}
        />
      );
    } else if (route === 3) {
      return (
        <QuizDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setAnswer}
          array={answer}
          handleChange={handleChange}
          handleChecked={handleChecked}
          handleQuestion={handleChangeQuestion}
          handleGenQuest={handleGenQuest}
        />
      );
    } else if (route === 4) {
      return <AccountDashboard />;
    }
  }, [
    answer,
    handleChange,
    handleChangeQuestion,
    handleChecked,
    handleGenQuest,
    isEdit,
    route,
    setAnswer,
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
