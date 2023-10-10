import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import { Button, Row, Image, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import styles from "./TrueFalseScreen.module.css";

const TrueFalseScreen = () => {
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
                <span>Tạo câu hỏi</span>
                <span style={{ color: "blue" }}>(Đúng hay Sai)</span>
                <span>từ bất cứ đoạn văn bản nào.</span>
              </h1>
              <h4
                className="text-center fw-medium mb-4"
                style={{ color: "#6b6f76" }}
              >
                <div>
                  Questgen là một công cụ trực tuyến để tạo tự động bằng các kỹ
                  thuật AI tiên tiến.
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
                  Bắt đầu miễn phí
                </Button>
              </div>
            </div>
          </Col>
          <Col className="p-4">
            <div className="d-flex justify-content-center">
              <Image
                width={300}
                height={300}
                className=" "
                aspect-ratio={200 / 200}
                src="https://image.typedream.com/cdn-cgi/image/width=640,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOYQNcAVgiy5njntQp1Kqk6BBQ_True_False.png?bucket=document"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center">
        <div className="" style={{ width: 1000 }}>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Một AI phức tạp để tạo câu hỏi Đúng hoặc Sai!
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Questgen cung cấp cho người dùng một công cụ đơn giản để tạo liền
            mạch câu đố Đúng hoặc Sai từ bất kỳ văn bản nhất định nào chỉ bằng
            một cú nhấp chuột. Bạn có thể dùng thử Questgen miễn phí. Chỉ cần
            đăng ký và bạn đã sẵn sàng để đi!
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
                  src="https://image.typedream.com/cdn-cgi/image/width=828,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOaCDUxfMlyhJxYnEc2REn17Az_T1.PNG?bucket=document"
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
                    src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2DOaEwCU1fC9Y840f9dcAhRtcmY_T2.PNG?bucket=document"
                  />
                </div>
              </div>
            </Row>
          </div>

          <h1 className="text-center" style={{ fontWeight: 700 }}>
            Phát triển một câu hỏi trắc nghiệm Đúng hay Sai
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Câu hỏi đúng hay sai được sử dụng để đánh giá học sinh xem một tuyên
            bố hoặc tình huống thực tế là đúng hay sai. Những loại câu hỏi này
            thường được sử dụng để đánh giá kiến thức thực tế.
          </h6>
          <h6 className="text-center fw-medium mt-2">
            Sau đây là một số kỹ thuật phổ biến nhất được sử dụng để tạo ra một
            bài kiểm tra đúng hoặc sai từ một đoạn văn nhất định.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>1. Thêm hoặc loại bỏ phủ định</h2>
            <h6 className=" fw-medium mt-2">
              Bất kỳ câu thực tế nào trong đoạn văn đều có thể được chuyển đổi
              thành câu hỏi đúng/sai bằng cách thêm hoặc bớt phủ định trong đó.
            </h6>
            <h6 className="fw-bold">Ví dụ:</h6>
            <h6 className="fw-bold">Đúng: Một con châu chấu có thể bay.</h6>
            <h6 className="fw-bold">Sai: Một con châu chấu không thể bay.</h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
              2. Thay đổi một thực thể được đặt tên
            </h2>
            <h6 className=" fw-medium mt-2">
              Một câu có chứa tên hoặc ngày tháng có thể được sử dụng làm câu
              hỏi đúng/sai bằng cách thay đổi sự vật trong câu.
            </h6>
            <h6 className="fw-bold">Ví dụ:</h6>
            <h6 className="fw-bold">
              Đúng: Augustus là hoàng đế Roman đầu tiền
            </h6>
            <h6 className="fw-bold">Sai: Nero là hoàng đế Roman đầu tiền</h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>3. Thay đổi tính chất</h2>
            <h6 className=" fw-medium mt-2">
              Bất kỳ câu nào có chứa tính từ đều có thể đảo ngược hoặc thay đổi
              để tạo thành câu hỏi đúng/sai.
            </h6>
            <h6 className="fw-bold">Ví dụ:</h6>
            <h6 className="fw-bold">Đúng: Bob có một ngôi nhà lớn.</h6>
            <h6 className="fw-bold">Sai: Bob có một ngôi nhà nhỏ.</h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>4. Thay đổi động từ chính.</h2>
            <h6 className=" fw-medium mt-2">
              Động từ chính của câu có thể được sửa đổi để tạo ra câu hỏi
              đúng/sai.
            </h6>
            <h6 className="fw-bold">Ví dụ:</h6>
            <h6 className="fw-bold">
              Đúng: Khi các electron được chia sẻ giữa hai nguyên tử, liên kết
              cộng hóa trị được hình thành.
            </h6>
            <h6 className="fw-bold">
              Sai: Khi các electron được chuyển giữa hai nguyên tử, liên kết
              cộng hóa trị được hình thành.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
              5. Tách câu ghép hoặc câu phức thành câu đơn.
            </h2>
            <h6 className=" fw-medium mt-2">
              Một câu ghép có thể được chia thành các câu nhỏ hơn để sử dụng cho
              câu hỏi đúng/sai.
            </h6>
            <h6 className="fw-bold">Ví dụ:</h6>
            <h6 className="fw-bold">
              Đúng: Anh ta lau nước và lật ngược con thuyền.
            </h6>
            <h6 className="fw-bold">Sai: Anh lật ngược con thuyền</h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
              6. Thay đổi cụm danh từ hoặc cụm động từ kết thúc
            </h2>
            <h6 className=" fw-medium mt-2">
              Một bài kiểm tra đúng hoặc sai cũng có thể được tạo ra bằng cách
              thay thế cụm danh từ hoặc cụm động từ kết thúc bằng một cụm từ
              khác.
            </h6>
            <h6 className="fw-bold">Ví dụ:</h6>
            <h6 className="fw-bold">
              Đúng: Dì Avanti đang ngồi trên ghế bành ngắm nhìn những hàng cây
              mới được rửa sạch và bầu trời tuyệt đẹp.
            </h6>
            <h6 className="fw-bold">
              Sai: Dì Avanti đang ngồi trên ghế sofa xem tivi.
            </h6>
          </div>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 100 }}
          >
            Cách Questgen tạo câu hỏi Đúng hoặc Sai
          </h1>
          <h6 className="text-center fw-medium mt-4">
            Tổng quan về các bước mà Questgen thực hiện để tạo bài kiểm tra Đúng
            hoặc Sai.
          </h6>

          <div
            className={`justify-content-center d-flex ${styles.stepContainer} mt-4`}
          >
            <div className="justify-content-center d-flex">
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
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
              >
                <div className="justify-content-center d-flex ">
                  <Image
                    width={500}
                    height={400}
                    fluid
                    src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2CiDucaOLGh5aOWMtM8o50MZvZx_image_1_.jpg?bucket=document"
                  />
                </div>
                <div className="p-4">
                  <h6 className="fw-medium mt-4 fw-bold">
                    01. Tóm tắt để xác định các câu quan trọng
                  </h6>
                  <h6 className="fw-medium ">
                    Dữ liệu nhập văn bản nhất định được tóm tắt để xác định các
                    câu chính chứa các khái niệm quan trọng được thảo luận trong
                    văn bản. Văn bản tóm tắt được chia thành các câu riêng lẻ.
                  </h6>
                  <h6 className="fw-medium mt-4 fw-bold">
                    02.Phủ định câu ứng cử viên
                  </h6>
                  <h6 className="fw-medium ">
                    Các câu ở bước 1 được phủ định (làm sai lệch) bằng thuật
                    toán phủ định câu được đào tạo tùy chỉnh để tạo ra một câu
                    sai từ một câu đúng nhất định.
                  </h6>
                  <h6 className="fw-medium mt-4 fw-bold">
                    03. Lọc các câu sau cuối
                  </h6>
                  <h6 className="fw-medium ">
                    Các bộ lọc đặc biệt cũng được sử dụng để phân cụm và loại bỏ
                    các câu gần trùng lặp giống nhau để chúng tôi duy trì tính
                    đa dạng trong các câu hỏi trắc nghiệm Đúng hoặc Sai được
                    tạo.
                  </h6>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrueFalseScreen;
