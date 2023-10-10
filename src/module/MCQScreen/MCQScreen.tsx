import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import styles from "./MCQScreen.module.css";
import { Button, Row, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";

const MCQScreen = () => {
  const navigate = useNavigate();
  const width = useSelector(currentWidth);

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
            <span>Tạo câu hỏi trắc nghiệm</span>
            <span style={{ color: "blue" }}>(MCQs)</span>
            <span>Từ bất cứ đoạn văn bản nào từ AI.</span>
          </h1>
          <h4
            className="text-center fw-medium mb-4"
            style={{ color: "#6b6f76" }}
          >
            <div>
              Questgen là công cụ online tự động tạo câu hỏi sử dựng kĩ thuật AI
              nâng cao.
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
              Bắt đầu miễn phí
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="" style={{ width: 1000 }}>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Trải nghiệm tạo câu hỏi trắc nghiệm một các đơn giản.
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Tin tưởng vào sự tự động hóa hoàn toàn, Questgen cho phép bạn biến
            các đoạn văn thành nhiều câu hỏi trắc nghiệm một cách dễ dàng. Tất
            cả chỉ cần một cú nhấp chuột, một vài lần sắp xếp lại và bạn đã sẵn
            sàng.
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
                  src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2Cr7hR05L4Se67iHV22PZPEO4fG_MCQ_Gen.PNG?bucket=document"
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
                    src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2Cr7oofc9K9F2KoPd4bGqEZ9a5e_f16af7a3-5f83-4c2a-a498-856ce32f3b43_47274623-c671-435e-a2d0-5a81302ec2ae_Questgen.gif?bucket=document"
                  />
                </div>
              </div>
            </Row>
          </div>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Một số ứng dụng
          </h1>

          <div
            className={`justify-content-center d-flex ${styles.stepContainer}`}
          >
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
                      Questgen để tạo các bộ câu hỏi dễ dàng trong vài giây. Họ
                      có thể tránh được những câu hỏi lặp đi lặp lại được chọn
                      từ ngân hàng câu hỏi cố định hàng năm.
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
                      Nhóm nhân sự có thể sử dụng Questgen để tạo đánh giá từ
                      các tài liệu tuân thủ. Mỗi khi có thay đổi về chính sách,
                      các đánh giá có thể được tạo và đưa ra cho nhân viên để
                      đảm bảo rằng họ đã đọc và hiểu các chính sách mới.
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
                      {" "}
                      Nhà xuất bản và các công ty công nghệ giáo dục
                    </h3>
                    <h6>
                      Các nhà xuất bản sách giáo khoa và các công ty công nghệ
                      giáo dục có thể sử dụng Questgen thay vì thuê ngoài quy
                      trình tạo đánh giá. Họ có thể có một đội ngũ nội bộ nhỏ và
                      tiết kiệm rất nhiều thời gian và chi phí.
                    </h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>

          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Câu hỏi trắc nghiệm được tạo ra như nào?
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Dưới đây là hướng dẫn cho giáo viên và hướng dẫn viên các tạo câu
            hỏi trắc nghiệm.
          </h6>
          <h6 className="text-center fw-medium mt-2">
            QuestGen sử dụng thuật toán AI để bắt chước chu trình tạo câu hỏi
            trắc nghiệm của con người.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>1. Nhận diện ý chính</h2>
            <h6 className=" fw-medium mt-2">
              Chúng ta bắt đầu với việc nhận diện ý chính mà thể hiện nội dung
              của đoạn văn.
            </h6>
            <div className="d-flex justify-content-center">
              <Image
                width={600}
                height={400}
                fluid
                src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/392020f2-3f6b-4244-8780-56c06170254f_3-1640778902996-compressed_png.png?bucket=document"
              />
            </div>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>2. Trích xuất từ khóa cua câu</h2>
            <h6 className=" fw-medium mt-2">
              Từ các câu chính, chúng tôi xác định các từ khóa và cụm từ khóa
              tạo thành câu trả lời chính xác cho câu hỏi nào được tạo.
            </h6>
            <div className="d-flex justify-content-center">
              <Image
                width={600}
                height={400}
                fluid
                src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/8ebd65bf-76c7-4cc3-b3a7-0b9d9b9ce539_4-1640778992696-compressed_png.png?bucket=document"
              />
            </div>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>3. Tạo câu hỏi trắc nghiệm</h2>
            <h6 className=" fw-medium mt-2">
              ​Tra cứu thông tin chi tiết 383 / 5.000 Kết quả dịch Kết quả bản
              dịch Sau khi trích xuất từ khóa hoặc cụm từ khóa (câu trả lời
              đúng), chúng tôi sử dụng thuật toán AI để tạo câu hỏi từ câu chính
              sao cho từ khóa hoặc cụm từ khóa được trích xuất là câu trả lời
              đúng. Đối với một cặp câu hỏi được tạo và câu trả lời đúng nhất
              định, chúng tôi tạo ra các yếu tố phân tâm có liên quan (lựa chọn
              câu trả lời sai) bằng thuật toán AI khác để tạo Câu hỏi trắc
              nghiệm (MCQ) hoàn chỉnh.
            </h6>
            <div className="d-flex justify-content-center">
              <Image
                width={600}
                height={400}
                fluid
                src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/6c3d4f19-db75-4381-8f3d-e902e50cd638_copy-of-last-chapter-question-generation-using-nlp-1-1640781619054-compressed_1_png.png?bucket=document"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MCQScreen;
