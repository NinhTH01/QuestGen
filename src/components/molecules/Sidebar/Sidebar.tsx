import { Nav } from "react-bootstrap";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      <Nav
        className=" d-flex flex-column rounded-2 p-4"
        style={{ minHeight: "98vh", background: "rgb(99 102 241)", width: 200 }}
        // activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        {/* <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item> */}
        <Nav.Item className="my-2">
          <Nav.Link eventKey="link-1">
            <span className="text-white fw-bold">Home</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2">
          <Nav.Link eventKey="link-2" className="text-white fw-bold">
            Bloom's Quiz
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2">
          <Nav.Link eventKey="disabled" className="text-white fw-bold">
            Similiar Quiz
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export interface SidebarProps {}

export default Sidebar;
