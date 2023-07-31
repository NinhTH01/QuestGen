import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import styles from "./MCQScreen.module.css";
import { Button } from "react-bootstrap";

const MCQScreen = () => {
  const navigate = useNavigate();

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
        <div className="" style={{ width: 1000, background: "cyan" }}>
          123
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MCQScreen;
