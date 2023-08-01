import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import { Button, Row, Image, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import styles from "./AiFaqScreen.module.css";

const AiFaqScreen = () => {
  const navigate = useNavigate();
  const width = useSelector(currentWidth);

  return (
    <>
      <Header />
      <div
        style={{
          background: "rgb(237, 252, 254)",
        }}
        className=" align-items-center align-content-center justify-content-center d-flex"
      >
        <Row
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={1}
          xs={1}
          style={{
            width: 1300,
            paddingTop: width > 1000 ? 100 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
          }}
        >
          <Col className="p-4">
            <div>
              <h1
                className="text-center "
                style={{ fontWeight: 900, fontSize: 52, marginBottom: 32 }}
              >
                <span>Create</span>
                <span style={{ color: "blue" }}> FAQs </span>
                <span>online from any text using AI.</span>
              </h1>
              <h4
                className="text-center fw-medium mb-4"
                style={{ color: "#6b6f76" }}
              >
                <div>
                  Questgen is an online tool to generate FAQs automatically
                  using advanced AI techniques in one click.
                </div>
              </h4>
              <div className="d-flex justify-content-center">
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
          </Col>
          <Col className="p-4">
            <div className="d-flex justify-content-center">
              <Image
                width={400}
                height={300}
                className=" "
                aspect-ratio={200 / 200}
                src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2CmtI8WiDpJY4SsH62yFJaVd8mK_faq-ga29b1182a_1920-removebg-preview.png?bucket=document"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center">
        <div className="" style={{ width: 1000 }}>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            A sophisticated AI to generate effective FAQs just for you!
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Questgen provides its users with all the necessary tools and
            techniques to seamlessly generate FAQs from any given text with just
            a single click. You can try out Questgen for free (No credit card
            needed!). Simply sign-up and you are good to go!
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
                  src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOM67znH1x2HTYndzjgGzH4cuR_T1.PNG?bucket=document"
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
                    src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOMAZx4Us3m1lwc8zfJ7uRdwHE_T2.PNG?bucket=document"
                  />
                </div>
              </div>
            </Row>
          </div>

          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Where are FAQs mostly used?
          </h1>
          <h6 className="text-center fw-medium mt-4">
            FAQs are most commonly seen on websites, online forums, blogs, email
            newsletters, etc.
          </h6>
          <h6 className="text-center fw-medium mt-2">
            Good FAQs generally help out visitors or customers by answering some
            of the most common questions that come to mind when someone visits a
            particular website. FAQs are an easy way to answer the important
            questions someone may have about a particular online platform.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Websites</h2>
            <h6 className=" fw-medium mt-2">
              Websites are one of the most common places you will find FAQs.
              Almost every website has a section at the base of the site
              dedicated to FAQs. These FAQs can come in different formats and
              will answer completely different questions based on the services
              being offered at these sites.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Online Forums</h2>
            <h6 className=" fw-medium mt-2">
              Online forums are where people come together for discussions, have
              a laugh, and seek solutions to some issues they might be facing.
              Reddit and Quora are some popular online discussion forums with
              millions of people using them. In most online forums, when
              moderators of a specific discussion thread notice a question
              popping up again and again, they will create an FAQ about it to
              quickly answer it whenever the question may come up.
            </h6>
          </div>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 100 }}
          >
            Why are FAQs important?
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Someone new who is unfamiliar with FAQs may ponder the question as
            to why FAQs sections and questions are that important in the online
            industry. The following points may help answer these questions:
          </h6>

          <h6 className="text-center fw-medium mt-4">
            FAQs are most commonly seen on websites, online forums, blogs, email
            newsletters, etc.
          </h6>
          <h6 className="text-center fw-medium mt-2">
            Good FAQs generally help out visitors or customers by answering some
            of the most common questions that come to mind when someone visits a
            particular website. FAQs are an easy way to answer the important
            questions someone may have about a particular online platform.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Boost Site Traffic</h2>
            <h6 className=" fw-medium mt-2">
              Using the right FAQs helps you boost your website traffic. It does
              this by improving the on-site SEO by targeting specific keywords
              usually used in search queries, thereby improving the pop-up and
              click rates.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Improve User Experience</h2>
            <h6 className=" fw-medium mt-2">
              When FAQs answer most of the typical user questions and queries
              from the get-go, it gives users a level of satisfaction and a
              feeling of easiness. When users feel satisfied they end up
              engaging more with the website, be it buying a product or service
              or engaging with the platform.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Improve Website Ranking</h2>
            <h6 className=" fw-medium mt-2">
              As user experience improves, so does the website ranking as more
              visits to the website improve its SEO and boost its Search Engine
              Results Page (SERP) score and ranking.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Act As Customer Support</h2>
            <h6 className=" fw-medium mt-2">
              If some of the most frequently asked questions are quickly
              answered by its FAQ section, then customers do not feel the need
              to get in touch with customer support, this way FAQs can act as
              efficient and effective customer support at your website.
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AiFaqScreen;
