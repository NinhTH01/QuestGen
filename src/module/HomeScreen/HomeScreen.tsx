import { Button, Image, Row } from "react-bootstrap";
import Header from "../../components/organisms/Header/Header";
import styles from "./HomeScreen.module.css";
import Footer from "../../components/organisms/Footer/Footer";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const width = useSelector(currentWidth);

  return (
    <>
      <Header />

      <Row
        xxl={2}
        xl={2}
        lg={2}
        md={1}
        sm={1}
        xs={1}
        style={{
          background: "rgb(237, 252, 254)",
          paddingTop: width > 1000 ? 100 : 0,
          paddingBottom: width > 1000 ? 100 : 0,
        }}
      >
        <div className="p-4 ">
          <h1
            style={{
              fontSize: "3.6em",
              fontWeight: "bolder",
            }}
            className="text-center p-4"
          >
            <span className="fw-bold">Tạo </span>
            <span className="fw-bold" style={{ color: "rgb(20, 60, 244)" }}>
              câu hỏi{" "}
            </span>
            <span className="fw-bold">
              từ bất kì nội dung nào chỉ với một cú bấm bằng AI
            </span>
          </h1>

          <h1
            className="d-flex justify-content-center"
            style={{ marginLeft: 28 }}
          >
            <span className="fw-bolder">Cho</span>
            <div
              className={`${styles.scroller}`}
              style={{ marginLeft: 16, color: "rgb(20, 60, 244)" }}
            >
              <span>
                Giáo viên
                <br />
                Đội HR
                <br />
                Trường học
                <br />
                Giáo viên
              </span>
            </div>
          </h1>
          <h6 className="text-center mt-4">
            <span>Tạo đánh giá ở các quy mô khác nhau</span>
          </h6>

          <div className="justify-content-center d-flex">
            <Button
              className={`${styles.freeButton} px-4 py-2 fw-medium mt-2 mb-4`}
              onClick={() => navigate("/dashboard")}
            >
              <strong>{`Dùng miễn phí ->`}</strong>
            </Button>
          </div>

          <h6 className="text-center mt-4">
            <span>Không cần thẻ ngân hàng</span>
          </h6>
        </div>

        <div className="text-center">
          <Image
            width={540}
            height={540}
            fluid
            className=" "
            src="https://image.typedream.com/cdn-cgi/image/width=640,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/c05633a3-c0bd-4947-bd91-fd3cfdf07397_Untitled_design_png.png?bucket=document 1x, https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/c05633a3-c0bd-4947-bd91-fd3cfdf07397_Untitled_design_png.png?bucket=document 2x"
          />
        </div>
      </Row>

      <h2 className="text-center fw-bold mb-4">Demo sản phẩm</h2>
      <div className="justify-content-center d-flex mb-4 mt-2 ">
        <h6
          className={`text-center ${styles.paragragh} fw-medium px-4 `}
          style={{ lineHeight: 1.8 }}
        >
          Questgen cung cấp một công cụ soạn thảo để tạo ra nhiều loại đánh giá
          như Câu hỏi trắc nghiệm (MCQ), Câu hỏi Đúng/Sai, Câu hỏi loại điền vào
          chỗ trống, Câu đố phân loại, v.v chỉ với 1 cú nhấp chuột Bạn có thể
          chỉnh sửa và thực hiện sửa đổi bẳng tính được tạo trước khi xuất nó
          dưới dạng đơn giản văn bản hoặc JSON.
        </h6>
      </div>

      <div className={`d-flex justify-content-center p-4`}>
        <iframe
          width={800}
          src="https://www.youtube.com/embed/8jN0dyEDWJg"
          title="embed"
          allowFullScreen
          style={{ aspectRatio: 2 / 1 }}
        ></iframe>
      </div>

      <h2 className="text-center fw-bold mb-4 mt-4">Cách hoạt động</h2>

      <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
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
            width: width > 1000 ? "50%" : "75%",
          }}
        >
          <div className="justify-content-center d-flex ">
            <Image
              width={500}
              height={400}
              fluid
              src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2O2qRiOFe9HBVaZtp9GpvQJXRAz_mcqsall.PNG"
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
            <h3 className="text-center">01. Nhập 1 đoạn text bất kì</h3>
            <h6 className="text-center fw-medium px-4">
              Nhập đoạn text bất kì, chọn loại câu hỏi để khởi tạo(MCQ,
              Đúng/Sai, Điền chỗ trống, Phân loại) và bấm tạo câu hỏi
            </h6>
          </div>
        </Row>
      </div>

      <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
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
            width: width > 1000 ? "50%" : "75%",
          }}
        >
          <div className="justify-content-center d-flex ">
            <Image
              width={500}
              height={400}
              fluid
              src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/47274623-c671-435e-a2d0-5a81302ec2ae_Questgen_GIF_new_gif.gif?bucket=document"
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
            <h3 className="text-center">02. Chỉnh sửa câu hỏi</h3>
            <h6 className="text-center fw-medium px-4">
              Bạn còn có thể chỉnh sửa câu hỏi đã được tạo ra.
            </h6>
          </div>
        </Row>
      </div>

      <h2 className="text-center fw-bold mb-4 mt-4">Một số ứng dụng</h2>

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
            width: 1000,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=828,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/427004e4-fb4e-4981-a632-ab0bc23e88ad_undraw_teaching_f1cm_png.png?bucket=document"
                />
              </div>
              <div className="mt-4 text-center ">
                <h3 className="fw-bold">Giáo viên và các trường học </h3>
                <h6>
                  Giáo viên và trường học có thể sử dụng công cụ soạn thảo
                  Questgen để tạo các bộ câu hỏi dễ dàng trong vài giây. Họ có
                  thể tránh được những câu hỏi lặp đi lặp lại được chọn từ ngân
                  hàng câu hỏi cố định hàng năm.
                </h6>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/c1582509-90a4-473a-8b94-9c8bc79384f7_undraw_team_ih79_png.png?bucket=document"
                />
              </div>
              <div className="mt-4 text-center ">
                <h3 className="fw-bold">Đội HR</h3>
                <h6>
                  Nhóm nhân sự có thể sử dụng Questgen để tạo đánh giá từ các
                  tài liệu tuân thủ. Mỗi khi có thay đổi về chính sách, các đánh
                  giá có thể được tạo và đưa ra cho nhân viên để đảm bảo rằng họ
                  đã đọc và hiểu các chính sách mới.
                </h6>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/67039692-b18b-48c5-b4fc-09dde9ae7672_undraw_Notebook_re_id0r_png.png?bucket=document"
                />
              </div>

              <div className=" text-center " style={{ marginTop: 50 }}>
                <h3 className="fw-bold">
                  Nhà xuất bản và các công ty công nghệ giáo dục
                </h3>
                <h6>
                  Các nhà xuất bản sách giáo khoa và các công ty công nghệ giáo
                  dục có thể sử dụng Questgen thay vì thuê ngoài quy trình tạo
                  đánh giá. Họ có thể có một đội ngũ nội bộ nhỏ và tiết kiệm rất
                  nhiều thời gian và chi phí.
                </h6>
              </div>
            </div>
          </div>
        </Row>
      </div>

      <h2 className="text-center fw-bold mb-4">Tại sao nên sử dụng QuestGen</h2>
      <div className="justify-content-center d-flex mb-4 mt-2 ">
        <h6
          className={`text-center ${styles.paragragh} fw-medium px-4 `}
          style={{ lineHeight: 1.8 }}
        >
          Sản phẩm đã đươc dựa trên QuestGen của ramsri@questgen.ai một công cụ
          có số lượng lớn người sử dụng cùng với nhiều cải tiến khác nhau
        </h6>
      </div>

      <div>
        <h3 className="text-center fw-medium" style={{ marginTop: 100 }}>
          <span>Được sử dụng bởi hơn 25000 người</span>
        </h3>
      </div>
      <div className="justify-content-center d-flex">
        <Row
          xxl={3}
          xl={3}
          lg={3}
          md={1}
          sm={1}
          xs={1}
          style={{
            paddingTop: width > 1000 ? 50 : 0,
            paddingBottom: width > 1000 ? 100 : 0,
            width: "50%",
          }}
        >
          <div className="text-center fw-bold mb-4" style={{ fontSize: 20 }}>
            <div style={{ color: " rgb(20, 60, 244)" }}>500,000+</div>
            <div>MCQs</div>
          </div>
          <div className="text-center fw-bold mb-4" style={{ fontSize: 20 }}>
            <div style={{ color: " rgb(20, 60, 244)" }}>300,000+</div>
            <div>True/False Qs</div>
          </div>
          <div className="text-center fw-bold mb-4" style={{ fontSize: 20 }}>
            <div style={{ color: " rgb(20, 60, 244)" }}>60,000+</div>
            <div>Hours Saved!</div>
          </div>
        </Row>
      </div>

      {/* <h2 className="text-center fw-bold mb-4">Công nghệ</h2>
      <div className="justify-content-center d-flex mb-4 mt-2 ">
        <h6
          className={`text-center ${styles.paragragh} fw-medium px-4 `}
          style={{ lineHeight: 1.8 }}
        >
          Thư viện mã nguồn mở Questgen cũng như bài nói chuyện chi tiết về một
          số thuật toán hỗ trợ Questgen.
        </h6>
      </div> */}

      {/* <div className={`justify-content-center d-flex ${styles.stepContainer}`}>
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
            width: 1000,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/28542ada-d839-4e0e-9f7b-cdd82bdb05d7_Add-a-heading_mtro8dgm_webp.webp?bucket=document"
                />
              </div>

              <div className=" text-center " style={{ marginTop: 50 }}>
                <h3 className="fw-bold">
                  Cùng kiểm tra thư viện mã nguồn mở của QuestGen
                </h3>
                <Button
                  style={{ background: "rgb(94, 93, 240)" }}
                  className="mt-4 p-3 rounded-5"
                >
                  Thư viện mã nguồn mở của QuestGen
                </Button>
              </div>
            </div>
          </div> */}
          {/* <div className="p-2">
            <div
              style={{ background: "#f0f3f9", height: 600 }}
              className="p-4 rounded-4"
            >
              <div className="justify-content-center d-flex ">
                <Image
                  width={400}
                  height={300}
                  fluid
                  src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/71cc6b81-bd78-48cc-993b-df2c1ca7c936_Question-Generation---Intro_mtdf6q27_webp.webp?bucket=document"
                />
              </div>

              <div className=" text-center " style={{ marginTop: 50 }}>
                <h3 className="fw-bold">
                  Check out our technical talk on Question Generation.
                </h3>
                <Button
                  style={{ background: "rgb(94, 93, 240)" }}
                  className="mt-4 p-3 rounded-5"
                >
                  Tech Talk on Questgen's Technology
                </Button>
              </div>
            </div>
          </div> */}
        {/* </Row>
      </div> */}
      <Footer />
    </>
  );
};

export default HomeScreen;
