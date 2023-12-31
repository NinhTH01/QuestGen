import { Navbar, Nav, Button, Dropdown, Image } from "react-bootstrap";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-white px-4 py-2">
      <Navbar.Brand
        href="/"
        className=" fw-bold"
        style={{ color: "rgb(20, 60, 244)" }}
      >
        QuestGen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto flex-grow-1 justify-content-end">
          <Nav.Link href="/" className="fw-medium mx-2">
            Trang chủ
          </Nav.Link>
          <Nav.Link href="/pricing" className="fw-medium mx-2">
            Thu phí
          </Nav.Link>
          {/* <Nav.Link href="/team" className="fw-medium mx-2">
            Team
          </Nav.Link> */}
          {/* <Nav.Link href="/blog" className="fw-medium mx-2">
            Blog
          </Nav.Link> */}
          {/* <Nav.Link href="/contact" className="fw-medium mx-2">
            Liên lạc
          </Nav.Link> */}
          <Dropdown align="end">
            <Dropdown.Toggle
              id="dropdown-basic"
              className=" text-black border-0 fw-medium pt-2"
              style={{ backgroundColor: "inherit" }}
            >
              Sản phẩm
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-4">
              <Dropdown.Item href="/faqs" className="p-4">
                <div className="d-flex align-items-center">
                  <Image
                    src="https://api.typedream.com/v0/document/public/2Ekr638mioigE0eEutJPulJTCQQ_icons8-faq-64.png"
                    height={80}
                    width={80}
                  />
                  <div style={{ width: 250, marginLeft: 16 }}>
                    <div>QuestGenFAQs</div>
                    <div
                      className=" overflow-hidden "
                      style={{ textOverflow: "ellipsis" }}
                    >
                      Những câu hỏi thường gặp
                    </div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="/ai-mcq-generator" className="p-4">
                <div className="d-flex align-items-center">
                  <Image
                    src="https://api.typedream.com/v0/document/public/2EkwGbqGbyz2EuvHm7kqXX3rnU6_icons8-quiz-67.png"
                    height={80}
                    width={80}
                  />
                  <div style={{ width: 250, marginLeft: 16 }}>
                    <div>Tạo AI MCQ</div>
                    <div
                      className=" overflow-hidden "
                      style={{ textOverflow: "ellipsis" }}
                    >
                      Tạo câu hỏi trắc nghiệm từ bất kì văn bản nào
                    </div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                href="/ai-true-false-quiz-generator"
                className="p-4"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="https://api.typedream.com/v0/document/public/2Ekw5JxsGCDP855mXYrj3OtdTT8_icons8-true-false-100.png"
                    height={80}
                    width={80}
                  />
                  <div style={{ width: 250, marginLeft: 16 }}>
                    <div>Tạo AI True/False</div>
                    <div
                      className=" overflow-hidden "
                      style={{ textOverflow: "ellipsis" }}
                    >
                      Tạo câu hỏi đúng sai từ bất cứ văn bản nào
                    </div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="/ai-faq-generator" className="p-4">
                <div className="d-flex align-items-center">
                  <Image
                    src="https://api.typedream.com/v0/document/public/2EkwVWkH5oP4kBW22czhHl3sGbI_icons8-faq-64_1_.png?bucket=document"
                    height={80}
                    width={80}
                  />
                  <div style={{ width: 250, marginLeft: 16 }}>
                    <div>Tạo AI FAQ</div>
                    <div
                      className=" overflow-hidden "
                      style={{ textOverflow: "ellipsis" }}
                    >
                      Tạo câu hỏi thường gặp từ bất cứ đoạn văn bản nào
                    </div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                href="/ai-high-order-question-generator"
                className="p-4"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="https://api.typedream.com/v0/document/public/2EkwhrfpDRMg11Nkt9xe12QdnsE_icons8-think-64.png"
                    height={80}
                    width={80}
                  />
                  <div style={{ width: 250, marginLeft: 16 }}>
                    <div>Câu hỏi bậc cao</div>
                    <div
                      className=" overflow-hidden "
                      style={{ textOverflow: "ellipsis" }}
                    >
                      Tạo câu hỏi bậc cao
                    </div>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            style={{
              background: "rgb(20,60,244)",
              borderRadius: 28,
              height: "80%",
              marginLeft: 16,
              fontSize: 16,
              fontWeight: 1,
            }}
            className={`px-4 fw-bold ${styles.shadow}`}
            onClick={() => navigate("/dashboard")}
          >
            Tạo câu hỏi
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export interface HeaderProps {}

export default Header;
