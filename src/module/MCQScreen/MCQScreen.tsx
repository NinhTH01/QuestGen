import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import styles from "./MCQScreen.module.css";
import { Button, Row, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";

const MCQScreen = () => {
  const navigate = useNavigate();
  const width = useSelector(currentWidth);

  return (
    <>
      <Header />
      <div
        style={{ height: 640, background: "rgb(237, 252, 254)" }}
        className="d-flex justify-content-center align-content-center align-items-center"
      >
        <div style={{ width: 800 }}>
          <h1
            className="text-center "
            style={{ fontWeight: 900, fontSize: 52, marginBottom: 32 }}
          >
            <span>Create Multiple Choice Questions</span>
            <span style={{ color: "blue" }}>(MCQs)</span>
            <span>online from any text using AI.</span>
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
          <div
            className="d-flex justify-content-center"
            style={{ width: "100%" }}
          >
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
      </div>
      <div className="d-flex justify-content-center">
        <div className="" style={{ width: 1000 }}>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            A hassle-free MCQ generation experience
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Believing in total automation, Questgen allows you to turn
            paragraphs into several multiple-choice questions with ease. All it
            takes is one click, a few rearrangements and you are good to go.
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
                  src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2Cr7hR05L4Se67iHV22PZPEO4fG_MCQ_Gen.PNG?bucket=document"
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
                    src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2Cr7oofc9K9F2KoPd4bGqEZ9a5e_f16af7a3-5f83-4c2a-a498-856ce32f3b43_47274623-c671-435e-a2d0-5a81302ec2ae_Questgen.gif?bucket=document"
                  />
                </div>
              </div>
            </Row>
          </div>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Who is it for?
          </h1>

          <div
            className={`justify-content-center d-flex ${styles.stepContainer}`}
          >
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
                      Teachers and Schools can use the Questgen authoring tool
                      to create worksheets easily in a few seconds. They can
                      avoid repetitive questions chosen from a fixed question
                      bank every year.
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
                      employees to make sure that they have read and understood
                      the new policies.
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
                      instead of outsourcing the assessment creation process.
                      They can have a small in-house team and save hugely on
                      time and cost.
                    </h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>

          <h1 className="text-center" style={{ fontWeight: 700 }}>
            How are MCQs made?
          </h1>
          <h6 className="text-center fw-medium mt-4">
            The following is a guide on how teachers and tutors create MCQs.
          </h6>
          <h6 className="text-center fw-medium mt-2">
            Questgen uses AI algorithms to mimic the human MCQ creation process.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>1. Identifying Key Sentences</h2>
            <h6 className=" fw-medium mt-2">
              We start with identifying key sentences that carry key concepts
              from any given text.
            </h6>
            <div className="d-flex justify-content-center">
              <Image
                width={600}
                height={400}
                fluid
                src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/392020f2-3f6b-4244-8780-56c06170254f_3-1640778902996-compressed_png.png?bucket=document"
              />
            </div>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
              2. Extracting Keywords from Sentences
            </h2>
            <h6 className=" fw-medium mt-2">
              From the key sentences, we identify keywords and key phrases that
              form the correct answer to which questions are created.
            </h6>
            <div className="d-flex justify-content-center">
              <Image
                width={600}
                height={400}
                fluid
                src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/8ebd65bf-76c7-4cc3-b3a7-0b9d9b9ce539_4-1640778992696-compressed_png.png?bucket=document"
              />
            </div>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>3. Forming an MCQ</h2>
            <h6 className=" fw-medium mt-2">
              After we extract a keyword or keyphrase (correct answer), we use
              AI algorithms to generate a question from the key sentence such
              that the extracted keyword or keyphrase is the right answer. For a
              given generated question and right answer pair, we generate
              relevant distractors (wrong answer choices) using another AI
              algorithm to generate the complete Multiple Choice Question (MCQ).
            </h6>
            <div className="d-flex justify-content-center">
              <Image
                width={600}
                height={400}
                fluid
                src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/6c3d4f19-db75-4381-8f3d-e902e50cd638_copy-of-last-chapter-question-generation-using-nlp-1-1640781619054-compressed_1_png.png?bucket=document"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MCQScreen;
