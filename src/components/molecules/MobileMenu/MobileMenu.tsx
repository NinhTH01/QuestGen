import { Navbar, Nav, Form } from "react-bootstrap";
import styles from "./MobileMenu.module.css";

const MobileMenu: React.FC<MobileMenuProps> = ({route, setRoute}) => {
    return (
      <Navbar expand="lg" className="px-4 " >
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto flex-grow-1 justify-content-end bg-light"  onSelect={(selectedKey) => setRoute(Number(selectedKey))}>
          <Form>
          <Nav.Item className="my-1">
            <Nav.Link eventKey={"0"} className={` ${styles.nav}`}>
              <span
                className={` ${
                  route === 0 ? "fw-bold" : "fw-medium"
                }`}
                style={{ fontSize: 14 }}
              >
                Câu hỏi trắc nghiệm
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="my-2">
            <Nav.Link eventKey={"1"} className={` ${styles.nav}`}>
              <span
                className={` ${
                  route === 1 ? "fw-bold" : "fw-medium"
                } `}
                style={{ fontSize: 14 }}
              >
                Câu hỏi đúng sai
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="my-2">
            <Nav.Link className={` ${styles.nav}`} eventKey={"2"}>
              <span
                className={`${
                  route === 2 ? "fw-bold" : "fw-medium"
                } `}
                style={{ fontSize: 14 }}
              >
                Câu hỏi điền vào chỗ trống
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="my-2">
            <Nav.Link className={` ${styles.nav}`} eventKey={"3"}>
              <span
                className={` ${
                  route === 3 ? "fw-bold" : "fw-medium"
                } `}
                style={{ fontSize: 14 }}
              >
                Tạo câu hỏi từ PDF
              </span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="my-2">
            <Nav.Link className={` ${styles.nav}`} eventKey={"4"}>
              <span
                className={` ${
                  route === 4 ? "fw-bold" : "fw-medium"
                } `}
                style={{ fontSize: 14 }}
              >
                Tạo file PDF từ Image
              </span>
            </Nav.Link>
          </Nav.Item>
        </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
export interface MobileMenuProps {
    route: number;

    setRoute: any;
}

export default MobileMenu;
