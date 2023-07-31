import { Button, Form } from "react-bootstrap";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";

const ContactScreen = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: 80 }} className="p-4">
        <h1 className="text-center" style={{ fontWeight: 800 }}>
          Contact
        </h1>
        <h5 className="text-center mt-4 fw-medium mb-2">
          Happy to answer any queries you may have about Questgen.
        </h5>
        <h6 className="text-center mt-2 fw-light">
          Feel free to use the form or write to ramsri@questgen.ai
        </h6>
        <div className="d-flex justify-content-center mt-4">
          <div style={{ width: 600, marginTop: 40, marginBottom: 50 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="fw-light"
                  style={{ marginLeft: 4, fontSize: 14 }}
                >
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{ background: "#FAF9F6" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="fw-light"
                  style={{ marginLeft: 4, fontSize: 14 }}
                >
                  Leave a message
                </Form.Label>
                <Form.Control
                  as={"textarea"}
                  placeholder="Enter your text"
                  style={{ height: 200, background: "#FAF9F6" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  width: 150,
                  background: "rgb(246 249 251)",
                  border: "1px solid rgb(211 228 249)",
                  color: "rgb(82 156 202)",
                }}
                className="fw-bold"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactScreen;
