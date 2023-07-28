import { Button, Image, Row } from "react-bootstrap";
import Header from "../../components/organisms/Header/Header";
import React from "react";
import styles from "./HomeScreen.module.css";
import Footer from "../../components/organisms/Footer/Footer";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const width = useSelector(currentWidth);

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
              onClick={() => navigate("/dashboard")}
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

      <div className={`d-flex justify-content-center p-4`}>
        <iframe
          width={800}
          src="https://www.youtube.com/embed/8jN0dyEDWJg"
          title="embed"
          allowFullScreen
          style={{ aspectRatio: 2 / 1 }}
        ></iframe>
      </div>

      <h2 className="text-center fw-bold mb-4 mt-4">How it works</h2>

      <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
        <Row
          xxl={2}
          xl={2}
          lg={2}
          md={1}
          sm={1}
          xs={1}
          style={{
            paddingTop: width > 1000 ? 50 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
            width: width > 1000 ? "50%" : "75%",
          }}
        >
          <div className="justify-content-center d-flex ">
            <Image
              width={500}
              height={400}
              fluid
              src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2O2qRiOFe9HBVaZtp9GpvQJXRAz_mcqsall.PNG"
            />
          </div>
          <div
            className=" text-center "
            style={{
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <h3 className="text-center">01 Enter any text</h3>
            <h6 className="text-center fw-medium px-4">
              Enter any text (up to 2000 words), choose the type of quiz
              questions to be generated (MCQ, True/False, Fill-in-the-blank, or
              Higher Order QA), and click on Generate Questions.
            </h6>
          </div>
        </Row>
      </div>

      <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
        <Row
          xxl={2}
          xl={2}
          lg={2}
          md={1}
          sm={1}
          xs={1}
          style={{
            paddingTop: width > 1000 ? 50 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
            width: width > 1000 ? "50%" : "75%",
          }}
        >
          <div className="justify-content-center d-flex ">
            <Image
              width={500}
              height={400}
              fluid
              src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/47274623-c671-435e-a2d0-5a81302ec2ae_Questgen_GIF_new_gif.gif?bucket=document"
            />
          </div>
          <div
            className=" text-center "
            style={{
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <h3 className="text-center">02 Edit and export quiz</h3>
            <h6 className="text-center fw-medium px-4">
              You can edit quiz questions and export them to PDF or text format.
            </h6>
          </div>
        </Row>
      </div>

      <h2 className="text-center fw-bold mb-4 mt-4">Who is it for?</h2>

      <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
        <Row
          xxl={3}
          xl={3}
          lg={3}
          md={3}
          sm={1}
          xs={1}
          style={{
            paddingTop: width > 1000 ? 50 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
            width: 1000,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=828,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/427004e4-fb4e-4981-a632-ab0bc23e88ad_undraw_teaching_f1cm_png.png?bucket=document"
                />
              </div>
              <div className="mt-4 text-center ">
                <h3 className="fw-bold">Teachers and Schools </h3>
                <h6>
                  Teachers and Schools can use the Questgen authoring tool to
                  create worksheets easily in a few seconds. They can avoid
                  repetitive questions chosen from a fixed question bank every
                  year.
                </h6>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/c1582509-90a4-473a-8b94-9c8bc79384f7_undraw_team_ih79_png.png?bucket=document"
                />
              </div>
              <div className="mt-4 text-center ">
                <h3 className="fw-bold">HR Teams</h3>
                <h6>
                  HR teams can use Questgen to create assessments from
                  compliance documents. Every time there is a change in
                  policies, assessments could be generated and given to
                  employees to make sure that they have read and understood the
                  new policies.
                </h6>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/67039692-b18b-48c5-b4fc-09dde9ae7672_undraw_Notebook_re_id0r_png.png?bucket=document"
                />
              </div>

              <div className=" text-center " style={{ marginTop: 50 }}>
                <h3 className="fw-bold">Publishers and Edtech Companies</h3>
                <h6>
                  Textbook publishers and edtech companies can use Questgen
                  instead of outsourcing the assessment creation process. They
                  can have a small in-house team and save hugely on time and
                  cost.
                </h6>
              </div>
            </div>
          </div>
        </Row>
      </div>

      <h2 className="text-center fw-bold mb-4">Why choose Questgen?</h2>
      <div className="justify-content-center d-flex mb-4 mt-2 ">
        <h6
          className={`text-center ${styles.paragragh} fw-medium px-4 `}
          style={{ lineHeight: 1.8 }}
        >
          Questgen is built on multiple years of AI research by the founders
          exclusively in question generation for edtech.
        </h6>
      </div>

      <h2 className="text-center fw-bold mb-4">What's the technology?</h2>
      <div className="justify-content-center d-flex mb-4 mt-2 ">
        <h6
          className={`text-center ${styles.paragragh} fw-medium px-4 `}
          style={{ lineHeight: 1.8 }}
        >
          Check out the Questgen open-source library as well as the detailed
          talk on some of the algorithms that power Questgen.
        </h6>
      </div>

      <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
        <Row
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={1}
          xs={1}
          style={{
            paddingTop: width > 1000 ? 50 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
            width: 1000,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/28542ada-d839-4e0e-9f7b-cdd82bdb05d7_Add-a-heading_mtro8dgm_webp.webp?bucket=document"
                />
              </div>

              <div className=" text-center " style={{ marginTop: 50 }}>
                <h3 className="fw-bold">
                  Check out Questgen Open Source Library
                </h3>
                <Button
                  style={{ background: "rgb(94, 93, 240)" }}
                  className="mt-4 p-3 rounded-5"
                >
                  Questgen's Open Source Github Library
                </Button>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/71cc6b81-bd78-48cc-993b-df2c1ca7c936_Question-Generation---Intro_mtdf6q27_webp.webp?bucket=document"
                />
              </div>

              <div className=" text-center " style={{ marginTop: 50 }}>
                <h3 className="fw-bold">
                  Check out our technical talk on Question Generation.
                </h3>
                <Button
                  style={{ background: "rgb(94, 93, 240)" }}
                  className="mt-4 p-3 rounded-5"
                >
                  Tech Talk on Questgen's Technology
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
