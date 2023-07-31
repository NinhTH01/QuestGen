import { Button, Col, Collapse, Row } from "react-bootstrap";

import React from "react";

const Collapsable: React.FC<CollapsableProps> = ({ question, answer }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="d-flex justify-content-center p-1" style={{ padding: 32 }}>
      <Button
        onClick={() => setOpen(!open)}
        // aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{
          width: 900,
          background: "#f0f3f9",
          borderWidth: 0,
          color: "black",
          fontSize: 28,
          fontWeight: 700,
          padding: 28,
          borderRadius: 16,
        }}
      >
        <Row
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          style={{ width: "100%" }}
        >
          <Col style={{ width: "5%" }}> {`${open ? "-" : "+"}`} </Col>
          <Col style={{ width: "95%" }}>
            <div className=" text-start">{question}</div>

            <Collapse in={open}>
              <div
                // id="example-collapse-text"
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                }}
                className="mt-4 text-start"
              >
                {answer}
              </div>
            </Collapse>
          </Col>
        </Row>
      </Button>
    </div>
  );
};
export interface CollapsableProps {
  question: string;

  answer: string;
}

export default Collapsable;
