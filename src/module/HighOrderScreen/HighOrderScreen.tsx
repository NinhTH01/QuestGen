import { useNavigate } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import { Button, Row, Image, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import styles from "./HighOrderScreen.module.css";

const HighOrderScreen = () => {
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
                <span>
                Tạo các câu hỏi bậc cao hơn ở các cấp độ khác nhau của Phân loại tư duy của Bloom.
                </span>
                <span style={{ color: "blue" }}>(Bloom's Taxonomy.)</span>
              </h1>
              <h4
                className="text-center fw-medium mb-4"
                style={{ color: "#6b6f76" }}
              >
                <div>
                  
Questgen là một công cụ trực tuyến để tạo tự động bằng các kỹ thuật AI tiên tiến.
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
                src="https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2CzK9rhN3DkfmBYqvcpBB9SqE7a_Bloom_s_Taxonomy.png?bucket=document"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center">
        <div className="" style={{ width: 1000 }}>
          <h1 className="text-center" style={{ fontWeight: 700 }}>
          Một AI phức tạp để tạo ra các câu hỏi bậc cao hơn từ bất kỳ văn bản nào chỉ bằng một cú nhấp chuột!
          </h1>
          <h6 className="text-center fw-medium mt-4">
          Questgen cung cấp giải pháp đơn giản chỉ bằng một cú nhấp chuột để tạo ra các câu đố cần kỹ năng suy luận và tư duy phản biện. Bạn có thể dùng thử Questgen miễn phí (Không cần thẻ tín dụng!).
          </h6>
          <div className="justify-content-center d-flex p-4">
            <Image
              fluid
              src="https://image.typedream.com/cdn-cgi/image/width=1920,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/2CzLfjx2Q1NBe8h41C4TS0NBtfN_Higher_Order_Question_Generation_Experience.PNG?bucket=document"
            />
          </div>

          <h1 className="text-center" style={{ fontWeight: 700 }}>
          Phân loại của Bloom là gì?
          </h1>
          <h6 className="text-center fw-medium mt-4">
            
Thang phân loại của Bloom là một phương pháp phân loại nhằm phân loại mục tiêu học tập của học sinh thành các mức độ phức tạp khác nhau, từ truy xuất dữ kiện đến tư duy phản biện.
          </h6>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 50 }}
          >
            
Các cấp độ khác nhau của thang phân loại Bloom
          </h1>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Ghi nhớ</h2>
            <h6 className=" fw-medium mt-2">
              
Đây là mức thấp nhất của phân loại. Ở cấp độ này, bạn được phép tiếp nhận càng nhiều thông tin càng tốt. Nó liên quan đến việc nghe, đọc, ghi nhớ, v.v. Cấp độ này chủ yếu liên quan đến việc lấy lại thông tin thực tế như một mục tiêu học tập.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Thấu hiểu</h2>
            <h6 className=" fw-medium mt-2">
            Cấp độ này liên quan đến việc bạn đặt những mẩu thông tin này vào các lớp khác nhau và cố gắng tìm ra những điểm tương đồng, khác biệt và điểm gặp gỡ. Mục tiêu học tập ở đây là so sánh, đối chiếu, tóm tắt, ví dụ, nội dung, v.v.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Áp dụng</h2>
            <h6 className=" fw-medium mt-2">
              
Ở cấp độ này, bạn sử dụng kiến ​​thức đã phân loại này và cố gắng áp dụng nó vào các tình huống cuộc sống hàng ngày của mình, liên hệ nó với những sự kiện xảy ra gần đây, v.v. Điều này giúp củng cố những gì bạn hiểu và ghi nhớ nó. Bạn cố gắng diễn xuất, thể hiện, liên hệ, thực hiện, v.v.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Phân tích</h2>
            <h6 className=" fw-medium mt-2">
              
Ở cấp độ phân tích, bạn sắp xếp, động não và phân biệt tất cả thông tin được thu thập đồng thời đưa ra kết quả của nó. Đây là nơi tư duy phản biện được tham gia.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
Đánh giá</h2>
            <h6 className=" fw-medium mt-2">
              
Ở cấp độ đánh giá, bạn đưa ra phán đoán được cân nhắc kỹ lưỡng hoặc diễn giải thông tin và kết quả theo ý của bạn. Bạn đánh giá hoặc đưa ra suy nghĩ về tuyên bố đó, ủng hộ hoặc phản đối nó
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Khởi tạo</h2>
            <h6 className=" fw-medium mt-2">
              
          Ở cấp độ cao nhất của Phân loại tư duy của Bloom, bạn có đủ kiến ​​thức về khái niệm cụ thể và bây giờ bạn có thể tự mình tạo ra các thiết kế và giải pháp cho các vấn đề.
            </h6>
          </div>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 100 }}
          >
            Questgen giúp tạo ra các câu hỏi bậc cao hơn về phân loại Blooms như thế nào?
          </h1>
          <div className="p-4">
            <h6 className=" fw-medium mt-4">
              
Khi sử dụng Questgen, bạn có thể tạo nhiều loại câu đố khác nhau bằng AI phục vụ cho các cấp độ Phân loại khác nhau của Bloom chỉ bằng một cú nhấp chuột:
            </h6>
            <h6> - Câu hỏi trắc nghiệm</h6>
            <h6> - Câu hỏi đúng sai</h6>
            <h6> - Câu hỏi thường gặp</h6>
            <h6> - Câu hỏi bậc cao</h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HighOrderScreen;
