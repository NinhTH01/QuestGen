import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import { Button, Row, Image, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import styles from "./TrueFalseScreen.module.css";

const TrueFalseScreen = () => {
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
                <span>Create</span>
                <span style={{ color: "blue" }}>(True or False)</span>
                <span>quiz online from any text using AI.</span>
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
                src="https://image.typedream.com/cdn-cgi/image/width=640,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOYQNcAVgiy5njntQp1Kqk6BBQ_True_False.png?bucket=document"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center">
        <div className="" style={{ width: 1000 }}>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            A sophisticated AI for True or False question generation!
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Questgen provides its users with a simple tool to seamlessly
            generate a True or False quiz from any given text with just a single
            click. You can try out Questgen for free (No credit card needed!).
            Simply sign-up and you are good to go!
          </h6>
          <div
            className={`justify-content-center d-flex ${styles.stepContainer}`}
          >
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
              }}
            >
              <div className="justify-content-center d-flex p-4">
                <Image
                  width={500}
                  height={400}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=828,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOaCDUxfMlyhJxYnEc2REn17Az_T1.PNG?bucket=document"
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
                <div className="justify-content-center d-flex p-4">
                  <Image
                    width={500}
                    height={400}
                    fluid
                    src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOaEwCU1fC9Y840f9dcAhRtcmY_T2.PNG?bucket=document"
                  />
                </div>
              </div>
            </Row>
          </div>

          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Developing a True or False quiz question
          </h1>
          <h6 className="text-center fw-medium mt-4">
            A true or false question is used to judge students whether a factual
            statement or scenario is either true or false. These types of
            questions are generally used to assess factual knowledge.
          </h6>
          <h6 className="text-center fw-medium mt-2">
            Following are some of the most common techniques used to create a
            true or false quiz from a given paragraph.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>1. Add or remove negation</h2>
            <h6 className=" fw-medium mt-2">
              Any factual sentence in a paragraph can be converted into a
              true/false question by adding or removing negation in it.
            </h6>
            <h6 className="fw-bold">Example:</h6>
            <h6 className="fw-bold">True: A grasshopper can fly.</h6>
            <h6 className="fw-bold">False: A grasshopper cannot fly.</h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>2. Change a named entity</h2>
            <h6 className=" fw-medium mt-2">
              A sentence containing a name or a date can be used as a true/false
              question by changing the entity in the sentence.
            </h6>
            <h6 className="fw-bold">Example:</h6>
            <h6 className="fw-bold">
              True: Augustus was the first Roman emperor.
            </h6>
            <h6 className="fw-bold">
              False: Nero was the first Roman emperor.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>3. Change adjective</h2>
            <h6 className=" fw-medium mt-2">
              Any sentence containing an adjective can be reversed or changed to
              generate a true/false question.
            </h6>
            <h6 className="fw-bold">Example:</h6>
            <h6 className="fw-bold">True: Bob has a big house.</h6>
            <h6 className="fw-bold">False: Bob has a small house.</h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>4. Change Main Verb.</h2>
            <h6 className=" fw-medium mt-2">
              The main verb of a sentence can be modified to generate a
              true/false question.
            </h6>
            <h6 className="fw-bold">Example:</h6>
            <h6 className="fw-bold">
              True: When electrons are shared between two atoms, a covalent bond
              is formed.
            </h6>
            <h6 className="fw-bold">
              False: When electrons are transferred between two atoms, a
              covalent bond is formed.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
              5. Split compound or complex sentences into simple sentences.
            </h2>
            <h6 className=" fw-medium mt-2">
              A compound sentence can be split into smaller sentences which can
              then be used for a true/false question.
            </h6>
            <h6 className="fw-bold">Example:</h6>
            <h6 className="fw-bold">
              True: He wiped off the water and turned the boat upside down.
            </h6>
            <h6 className="fw-bold">False: He turned the boat upside down</h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
              6. Changing the ending noun phrase or verb phrase
            </h2>
            <h6 className=" fw-medium mt-2">
              A true or false quiz can also be generated by replacing the ending
              noun phrase or verb phrase with a different one.
            </h6>
            <h6 className="fw-bold">Example:</h6>
            <h6 className="fw-bold">
              True: Aunt Avanti was sitting in the armchair watching the newly
              washed trees and beautiful sky.
            </h6>
            <h6 className="fw-bold">
              False: Aunt Avanti was sitting on the sofa, watching television.
            </h6>
          </div>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 100 }}
          >
            How Questgen generates True or False questions
          </h1>
          <h6 className="text-center fw-medium mt-4">
            An overview of the steps followed by Questgen to generate a True or
            False quiz.
          </h6>

          <div
            className={`justify-content-center d-flex ${styles.stepContainer} mt-4`}
          >
            <div className="justify-content-center d-flex">
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
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
              >
                <div className="justify-content-center d-flex ">
                  <Image
                    width={500}
                    height={400}
                    fluid
                    src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2CiDucaOLGh5aOWMtM8o50MZvZx_image_1_.jpg?bucket=document"
                  />
                </div>
                <div className="p-4">
                  <h6 className="fw-medium mt-4 fw-bold">
                    01. Summarization to identify key sentences
                  </h6>
                  <h6 className="fw-medium ">
                    The given text input is summarized to identify key sentences
                    that contain important concepts discussed in the text. The
                    summarized text is split into individual sentences.
                  </h6>
                  <h6 className="fw-medium mt-4 fw-bold">
                    02. Negate candidate sentences
                  </h6>
                  <h6 className="fw-medium ">
                    The sentences from step 1 are negated (falsified) with a
                    custom-trained sentence negation algorithm to generate a
                    false sentence from a given true sentence.
                  </h6>
                  <h6 className="fw-medium mt-4 fw-bold">
                    03. Post filtering of sentences
                  </h6>
                  <h6 className="fw-medium ">
                    Special filters are also used to cluster and eliminate near
                    duplicate sentences that are similar to each other so we
                    preserve diversity in the generated True or False quiz
                    questions.
                  </h6>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrueFalseScreen;
