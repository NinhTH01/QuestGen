import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import Header from "../../components/organisms/Header";
import React from "react";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
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

  return (
    <>
      <Header />

      <Row
        xxl={2}
        xl={2}
        lg={2}
        md={1}
        sm={1}
        xs={1}
        style={{
          background: "rgb(237, 252, 254)",
          paddingTop: width > 1000 ? 100 : 0,
          paddingBottom: width > 1000 ? 100 : 0,
        }}
      >
        <div className="p-4 ">
          <h1
            style={{
              fontSize: "3.6em",
              fontWeight: "bolder",
            }}
            className="text-center p-4"
          >
            <span className="fw-bold">Generate </span>
            <span className="fw-bold" style={{ color: "rgb(20, 60, 244)" }}>
              quizzes{" "}
            </span>
            <span className="fw-bold">
              from any text in one click using AI.
            </span>
          </h1>

          <h1
            className="d-flex justify-content-center"
            style={{ marginLeft: 28 }}
          >
            <span className="fw-bolder">For</span>
            <div
              className={`${styles.scroller}`}
              style={{ marginLeft: 16, color: "rgb(20, 60, 244)" }}
            >
              <span>
                Teachers
                <br />
                HR Teams
                <br />
                Schools
                <br />
                Teachers
              </span>
            </div>
          </h1>
          <h6 className="text-center mt-4">
            <span>To generate assessments at scale</span>
          </h6>

          <div className="justify-content-center d-flex">
            <Button
              className={`${styles.freeButton} px-4 py-2 fw-medium mt-2 mb-4`}
            >
              <strong>{`Start for free ->`}</strong>
            </Button>
          </div>

          <h6 className="text-center mt-4">
            <span>No Credit Card required!</span>
          </h6>
        </div>

        <div className="text-center">
          <Image
            width={540}
            height={540}
            fluid
            className=" "
            src="https://image.typedream.com/cdn-cgi/image/width=640,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/c05633a3-c0bd-4947-bd91-fd3cfdf07397_Untitled_design_png.png?bucket=document 1x, https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/c05633a3-c0bd-4947-bd91-fd3cfdf07397_Untitled_design_png.png?bucket=document 2x"
          />
        </div>
      </Row>

      <div>
        <h3 className="text-center fw-medium" style={{ marginTop: 100 }}>
          <span>Trusted by 25,000+ users!</span>
        </h3>
        <h5 className="text-center fw-medium">
          <span>
            Join our users in saving hundreds of hours every month on quizzes.
          </span>
        </h5>
      </div>
      <div className="justify-content-center d-flex">
        <Row
          xxl={3}
          xl={3}
          lg={3}
          md={1}
          sm={1}
          xs={1}
          style={{
            paddingTop: width > 1000 ? 50 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
            width: "50%",
          }}
        >
          <div className="text-center fw-bold mb-4" style={{ fontSize: 20 }}>
            <div style={{ color: " rgb(20, 60, 244)" }}>500,000+</div>
            <div>MCQs</div>
          </div>
          <div className="text-center fw-bold mb-4" style={{ fontSize: 20 }}>
            <div style={{ color: " rgb(20, 60, 244)" }}>300,000+</div>
            <div>True/False Qs</div>
          </div>
          <div className="text-center fw-bold mb-4" style={{ fontSize: 20 }}>
            <div style={{ color: " rgb(20, 60, 244)" }}>60,000+</div>
            <div>Hours Saved!</div>
          </div>
        </Row>
      </div>

      <h2 className="text-center fw-bold mb-4">Product Demo</h2>
      <div className="justify-content-center d-flex mb-4 mt-2 ">
        <h6
          className={`text-center ${styles.paragragh} fw-medium px-4 `}
          style={{ lineHeight: 1.8 }}
        >
          Questgen provides an authoring tool to generate various kinds of
          assessments like Multiple Choice Questions (MCQs), True/False
          Questions, Fill-in-the-blanks, Higher-Order Questions, Bloom's
          taxonomy quizzes, etc in one click. You can edit and make
          modifications to the generated worksheet before exporting it as plain
          text or JSON.
        </h6>
      </div>

      <div className="justify-content-center d-flex">
        <iframe
          title="a"
          src="https://www.youtube.com/embed/8jN0dyEDWJg"
          allowFullScreen
          className={`${styles.iframeContainer}`}
        ></iframe>
      </div>
    </>
  );
};

export default HomeScreen;
