import { Row, Button } from "react-bootstrap";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import styles from "./PricingScreen.module.css";
import { useNavigate } from "react-router-dom";

const PricingScreen = () => {
  const width = useSelector(currentWidth);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div style={{ marginTop: 80 }}>
        <h1 className="text-center" style={{ fontWeight: 800 }}>
          Thu phí App
        </h1>
        <h5 className="text-center mt-4 fw-medium mb-2">
          Tạo số lượng lớn câu hỏi và câu trả lời mà không mất phí
        </h5>
        {/* <h6 className="text-center mt-2 fw-light">
          If you are a company looking to integrate Questgen's API, please check
          API pricing here.
        </h6> */}
        <div className="d-flex justify-content-center">
          <Row
            xxl={1}
            xl={1}
            lg={1}
            md={1}
            sm={1}
            xs={1}
            style={{
              paddingTop: width > 1000 ? 50 : 0,
              paddingBottom: width > 1000 ? 100 : 0,
              width: 900,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <div className="p-2">
              <div
                style={{ background: "#f0f3f9", height: 600 }}
                className={`p-4 rounded-4 ${styles.shadow}`}
              >
                <h3
                  className="text-center fw-bold"
                  style={{ color: "rgb(94, 93, 240)" }}
                >
                  Cơ bản
                </h3>

                <h4 className="text-center fw-bold">Miễn Phí!</h4>
                <h5 className="text-center fw-light" style={{ marginTop: 50 }}>
                  Thử ngay QuestGen một cách miến phí
                </h5>
                <h5 className=" fw-light" style={{ marginTop: 100 }}>
                  ✓ Không giới hạn số lượng câu hỏi
                </h5>
                {/* <h5 className=" fw-light">✓ Email support</h5> */}
                <div className=" text-center " style={{ marginTop: 100 }}>
                  <Button
                    style={{ background: "rgb(94, 93, 240)" }}
                    className={`mt-4 py-2 px-3 rounded-5 ${styles.buttonShadow}`}
                    onClick={() => navigate("/dashboard")}
                  >
                    Bắt đầu!
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="p-2">
              <div
                style={{ background: "#f0f3f9", height: 600 }}
                className={`p-4 rounded-4 ${styles.shadow}`}
              >
                <h3
                  className="text-center fw-bold"
                  style={{ color: "rgb(94, 93, 240)" }}
                >
                  Pro
                </h3>

                <h4 className="text-center fw-bold">$15 /month</h4>
                <h6 className="text-center fw-bold">Or $150 billed yearly</h6>
                <h5 className="text-center fw-light" style={{ marginTop: 25 }}>
                  Unlimited runs for individual fair use.
                </h5>
                <h5 className=" fw-light" style={{ marginTop: 100 }}>
                  ✓ Priority Support
                </h5>
                <h5 className=" fw-light">✓ Early roll-out of new features.</h5>
                <div className=" text-center " style={{ marginTop: 100 }}>
                  <Button
                    style={{ background: "rgb(94, 93, 240)" }}
                    className={`mt-4 py-2 px-3 rounded-5 ${styles.buttonShadow}`}
                  >
                    Get Started!
                  </Button>
                </div>
              </div>
            </div> */}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingScreen;
