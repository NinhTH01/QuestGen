import { Nav } from "react-bootstrap";
import styles from "./Sidebar.module.css";
import React from "react";

const Sidebar: React.FC<SidebarProps> = ({ route, setRoute }) => {
  return (
    <>
      <Nav
        className={`d-flex flex-column rounded-2 p-4 ${styles.nav_tabs}`}
        style={{ minHeight: "98vh", background: "rgb(99 102 241)", width: 200 }}
        activeKey="/home"
        onSelect={(selectedKey) => setRoute(Number(selectedKey))}
        variant="pills"
      >
        <Nav.Item className="my-2">
          <Nav.Link eventKey={"0"} className={` ${styles.nav}`}>
            <span
              className={`text-white ${route === 0 ? "fw-bold" : "fw-medium"}`}
            >
              Home
            </span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2">
          <Nav.Link eventKey={"1"} className={` ${styles.nav}`}>
            <span
              className={`text-white ${route === 1 ? "fw-bold" : "fw-medium"} `}
            >
              Bloom's Quiz
            </span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2">
          <Nav.Link className={` ${styles.nav}`} eventKey={"2"}>
            <span
              className={`text-white ${route === 2 ? "fw-bold" : "fw-medium"} `}
            >
              Similiar Quiz
            </span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export interface SidebarProps {
  route: number;

  setRoute: any;
}

export default Sidebar;
