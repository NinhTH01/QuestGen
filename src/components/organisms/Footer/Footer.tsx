import { Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { currentWidth } from "../../../global/selectors";

const Footer: React.FC<FooterProps> = () => {
  const width = useSelector(currentWidth);

  return (
    <>
      <hr />

      <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
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
            width: 1200,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <div className="p-4">
            <div className="  ">
              <h5 className="fw-medium" style={{ color: "rgb(94, 93, 240)" }}>
                Questgen
              </h5>
              <h6 className="fw-medium">
                Copyright © QuestgenAI, Inc. All rights reserved.
              </h6>
            </div>
          </div>

          <div className="p-4">
            <div>
              <h5 className="fw-medium">Company</h5>
              <div className="mt-2">
                <a> Twitter </a>
              </div>
              <div className="mt-2">
                <a> Linkedin </a>
              </div>
              <div className="mt-2">
                <a> hninh1710@gmail.com </a>
              </div>
              <h5 className="fw-medium mt-4">Use-cases</h5>
              <div className="mt-2">
                <a> AI MCQ Generator</a>
              </div>
              <div className="mt-2">
                <a> AI FAQ Generator</a>
              </div>
              <div className="mt-2">
                <a> AI True or False Generator</a>
              </div>
              <div className="mt-2">
                <a> AI High Order Question Generator</a>
              </div>
              <div className="mt-2">
                <a> AI Fill-in-the-Blank Quiz Generator</a>
              </div>
              <div className="mt-2">
                <a> AI Bloom's Taxonomy Quiz Generator</a>
              </div>
              <div className="mt-2">
                <a> AI Similiar Question Generator</a>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div>
              <h5 className="fw-medium">Legal</h5>
              <div className="mt-2">
                <a> Term of Service </a>
              </div>
              <div className="mt-2">
                <a> Privacy Policy </a>
              </div>

              <h5 className="fw-medium mt-4">Comparisons</h5>
              <div className="mt-2">
                <a> Questgen vs Quillionz</a>
              </div>

              <h5 className="fw-medium mt-4">FAQs</h5>
              <div className="mt-2">
                <a> Questgen FAQs</a>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export interface FooterProps {}

export default Footer;
