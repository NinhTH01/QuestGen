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
import ImageDashboard from "../../components/templates/ImageDashboard/ImageDashboard";

const DashboardScreen = () => {
  const width = useSelector(currentWidth);

  const [route, setRoute] = React.useState<number>(0);

  const [isEdit, setEdit] = React.useState<boolean>(false);

  const [
    answer,
    setAnswer,
    handleGenQuestFromText,
    handleGenQuestFromFile,
    handleChange,
    handleChecked,
    handleChangeQuestion,
  ] = useQuestgen(route);

  const handleChangeRoute = React.useCallback((index: number) => {
    setAnswer([]);
    setRoute(index);
},[setAnswer])

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
          handleGenQuest={handleGenQuestFromText}
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
          handleGenQuest={handleGenQuestFromText}
        />
      );
    } else if (route === 2) {
      return (
        <SimiliarDashboard
        isEdit={isEdit}
        setEdit={setEdit}
        setArray={setAnswer}
        array={answer}
        handleChange={handleChange}
        handleChecked={handleChecked}
        handleQuestion={handleChangeQuestion}
        handleGenQuest={handleGenQuestFromText}
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
          handleGenQuest={handleGenQuestFromFile}
        />
      );
    } else if (route === 4) {
      return (
        <ImageDashboard
          isEdit={isEdit}
          setEdit={setEdit}
          setArray={setAnswer}
          array={answer}
          handleChange={handleChange}
          handleChecked={handleChecked}
          handleQuestion={handleChangeQuestion}
          handleGenQuest={handleGenQuestFromFile}
        />
      );
    } else if (route === 5) {
      return <AccountDashboard />;
    }
  }, [
    answer,
    handleChange,
    handleChangeQuestion,
    handleChecked,
    handleGenQuestFromFile,
    handleGenQuestFromText,
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
            <div className="" style={{ position: "fixed", top: 0 }}>
              <Sidebar route={route} setRoute={handleChangeRoute} />
            </div>
          )}
        </Col>
        <Col
          style={{
            width: width > 800 ? "calc(100% - 208px)" : "100%",
            marginLeft: width > 800 ? 240 : 0,
            height: "99vh",
            zIndex: 2,
          }}
        >
          <div className="p-2">
            <div className="bg-light" style={{}}>
              
              {RouteComponent}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DashboardScreen;
