import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import { Button, Row, Image, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import styles from "./HighOrderScreen.module.css";

const HighOrderScreen = () => {
  const navigate = useNavigate();
  const width = useSelector(currentWidth);

  return (
    <>
      <Header />
      <div
        style={{
          background: "rgb(237, 252, 254)",
        }}
        className=" align-items-center align-content-center justify-content-center d-flex"
      >
        <Row
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={1}
          xs={1}
          style={{
            width: 1300,
            paddingTop: width > 1000 ? 100 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
          }}
        >
          <Col className="p-4">
            <div>
              <h1
                className="text-center "
                style={{ fontWeight: 900, fontSize: 52, marginBottom: 32 }}
              >
                <span>
                  Create higher-order questions on different levels of Bloom's
                  Taxonomy.
                </span>
                <span style={{ color: "blue" }}>(Bloom's Taxonomy.)</span>
              </h1>
              <h4
                className="text-center fw-medium mb-4"
                style={{ color: "#6b6f76" }}
              >
                <div>
                  Questgen is an online tool to generate automatically using
                  advanced AI techniques.
                </div>
              </h4>
              <div className="d-flex justify-content-center">
                <Button
                  style={{
                    background: "rgb(20,60,244)",
                    borderRadius: 28,
                    marginLeft: 16,
                    fontSize: 16,
                    fontWeight: 1,
                  }}
                  className={`px-4 py-3 fw-bold ${styles.shadow}`}
                  onClick={() => navigate("/dashboard")}
                >
                  Get started for free
                </Button>
              </div>
            </div>
          </Col>
          <Col className="p-4">
            <div className="d-flex justify-content-center">
              <Image
                width={300}
                height={300}
                className=" "
                aspect-ratio={200 / 200}
                src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2CzK9rhN3DkfmBYqvcpBB9SqE7a_Bloom_s_Taxonomy.png?bucket=document"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center">
        <div className="" style={{ width: 1000 }}>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            A sophisticated AI to generate Higher-Order questions from any text
            in one click!
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Questgen provides a simple one-click solution to generate quizzes
            that need reasoning and critical thinking skills. You can try out
            Questgen for free (No credit card needed!). Simply sign-up and you
            are good to go!
          </h6>
          <div className="justify-content-center d-flex p-4">
            <Image
              fluid
              src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2CzLfjx2Q1NBe8h41C4TS0NBtfN_Higher_Order_Question_Generation_Experience.PNG?bucket=document"
            />
          </div>

          <h1 className="text-center" style={{ fontWeight: 700 }}>
            What is Bloom's Taxonomy?
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Bloom's Taxonomy is a classification method to classify the learning
            objectives of students into different levels of complexity ranging
            from factual retrieval to critical thinking.
          </h6>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 50 }}
          >
            The different levels of Bloom's Taxonomy
          </h1>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Remember</h2>
            <h6 className=" fw-medium mt-2">
              This is the lowest level of the taxonomy. At this level, you are
              allowed to take in as much information as possible. It involves
              listening, reading, memorizing, etc. This level mostly involves
              the retrieval of factual information as a learning objective.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Understand</h2>
            <h6 className=" fw-medium mt-2">
              This level involves you placing these pieces of information into
              different classes and trying to find similarities, differences,
              and meeting points. The learning objectives here are comparing,
              contrasting, summarizing, exemplifying, the content, etc.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Apply</h2>
            <h6 className=" fw-medium mt-2">
              At this level, you use this categorized knowledge and try to apply
              it in your everyday life scenarios, relate ​it to recent
              happenings, etc. This helps solidify what you understand and its
              retention. You try to act out, display, relate, execute, etc.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Analyze</h2>
            <h6 className=" fw-medium mt-2">
              At the analysis level, you organize, brainstorm, and differentiate
              all the gathered information while attributing to its results.
              This is where critical thinking gets involved.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Evaluate</h2>
            <h6 className=" fw-medium mt-2">
              At the evaluation level, you make a well-thought judgment or an
              interpretation of the information and results at your disposal.
              You evaluate or give thoughts on the statement, either for it or
              against it.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Create</h2>
            <h6 className=" fw-medium mt-2">
              At the highest level of Bloom's Taxonomy, you have adequate
              knowledge of the particular concept and now you can create designs
              and solutions to the problems yourself.
            </h6>
          </div>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 100 }}
          >
            How does Questgen help generate Higher Order Questions On Blooms
            Taxonomy?
          </h1>
          <div className="p-4">
            <h6 className=" fw-medium mt-4">
              Using Questgen, you can generate various types of quizzes using AI
              that cater to different levels of Bloom's Taxonomy in one click:
            </h6>
            <h6> - Multiple Choice Questions</h6>
            <h6> - True or False Questions</h6>
            <h6> - FAQs</h6>
            <h6> - Higher-Order Questions and Answers</h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HighOrderScreen;
