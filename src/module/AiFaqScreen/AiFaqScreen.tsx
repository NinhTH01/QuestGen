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
                  QuestGen là một công cụ trực tuyến để tạo các câu hỏi thường gặp tự động bằng cách sử dụng kĩ thuật AI chỉ với 1 cú click
                  
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
            Một AI tinh vi để tạo ra các Câu hỏi thường gặp hiệu quả dành riêng cho bạn!
          </h1>
          <h6 className="text-center fw-medium mt-4">
          Questgen cung cấp cho người dùng tất cả các công cụ và kỹ thuật cần thiết để tạo liền mạch các Câu hỏi thường gặp từ bất kỳ văn bản cụ thể nào chỉ bằng một cú nhấp chuột. Bạn có thể dùng thử Questgen miễn phí (Không cần thẻ tín dụng!).
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
            
Câu hỏi thường gặp được sử dụng chủ yếu ở đâu?
          </h1>
          <h6 className="text-center fw-medium mt-4">
            
Câu hỏi thường gặp thường thấy nhất trên các trang web, diễn đàn trực tuyến, blog, bản tin email, v.v.
          </h6>
          <h6 className="text-center fw-medium mt-2">
            
Những câu hỏi thường gặp hay thường giúp ích cho khách truy cập hoặc khách hàng bằng cách trả lời một số câu hỏi phổ biến nhất xuất hiện trong đầu khi ai đó truy cập một trang web cụ thể. Câu hỏi thường gặp là cách dễ dàng để trả lời các câu hỏi quan trọng mà ai đó có thể có về một nền tảng trực tuyến cụ thể.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Trang web</h2>
            <h6 className=" fw-medium mt-2">
            Trang web là một trong những nơi phổ biến nhất mà bạn sẽ tìm thấy Câu hỏi thường gặp. Hầu hết mọi trang web đều có một phần ở cuối trang dành riêng cho Câu hỏi thường gặp. Những câu hỏi thường gặp này có thể có nhiều định dạng khác nhau và sẽ trả lời những câu hỏi hoàn toàn khác nhau dựa trên các dịch vụ được cung cấp tại các trang web này.
            </h6>
          </div>

          <div className="p-4"> 
            <h2 style={{ fontWeight: 700 }}>Diễn đàn trực tuyến</h2>
            <h6 className=" fw-medium mt-2"> 
            Diễn đàn trực tuyến là nơi mọi người cùng nhau thảo luận, giải trí và tìm kiếm giải pháp cho một số vấn đề mà họ có thể gặp phải. Reddit và Quora là một số diễn đàn thảo luận trực tuyến phổ biến với hàng triệu người sử dụng chúng. Trong hầu hết các diễn đàn trực tuyến, khi người điều hành một chủ đề thảo luận cụ thể nhận thấy một câu hỏi xuất hiện lặp đi lặp lại, họ sẽ tạo Câu hỏi thường gặp về câu hỏi đó để nhanh chóng trả lời bất cứ khi nào câu hỏi đó xuất hiện.
            </h6>
          </div>

          <h1
            className="text-center"
            style={{ fontWeight: 700, marginTop: 100 }}
          >
           Vì sao những câu hỏi thường gặp quan trọng?
          </h1>
          <h6 className="text-center fw-medium mt-4">
          Một người mới chưa quen với Câu hỏi thường gặp có thể suy ngẫm câu hỏi tại sao các phần và câu hỏi trong Câu hỏi thường gặp lại quan trọng trong ngành trực tuyến. Những điểm sau đây có thể giúp trả lời những câu hỏi này:
          </h6>

          <h6 className="text-center fw-medium mt-4">
          Câu hỏi thường gặp thường thấy nhất trên các trang web, diễn đàn trực tuyến, blog, bản tin email, v.v.
          </h6>
          <h6 className="text-center fw-medium mt-2">
          Những câu hỏi thường gặp hay thường giúp ích cho khách truy cập hoặc khách hàng bằng cách trả lời một số câu hỏi phổ biến nhất xuất hiện trong đầu khi ai đó truy cập một trang web cụ thể. Câu hỏi thường gặp là cách dễ dàng để trả lời các câu hỏi quan trọng mà ai đó có thể có về một nền tảng trực tuyến cụ thể.
          </h6>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Tăng lưu lượng truy cập trang web</h2>
            <h6 className=" fw-medium mt-2">
              
Sử dụng Câu hỏi thường gặp phù hợp sẽ giúp bạn tăng lưu lượng truy cập trang web của mình. Nó thực hiện điều này bằng cách cải thiện SEO tại chỗ bằng cách nhắm mục tiêu các từ khóa cụ thể thường được sử dụng trong các truy vấn tìm kiếm, từ đó cải thiện tỷ lệ nhấp chuột và cửa sổ bật lên.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Cải thiện trải nghiệm người dùng</h2>
            <h6 className=" fw-medium mt-2">
              
Khi Câu hỏi thường gặp trả lời hầu hết các câu hỏi và truy vấn thông thường của người dùng ngay từ đầu, nó mang lại cho người dùng mức độ hài lòng và cảm giác thoải mái. Khi người dùng cảm thấy hài lòng, họ sẽ tương tác nhiều hơn với trang web, có thể là mua sản phẩm, dịch vụ hay tương tác với nền tảng.
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>Cải thiện thứ hạng trang web</h2>
            <h6 className=" fw-medium mt-2">
              
Khi trải nghiệm người dùng được cải thiện, thứ hạng của trang web cũng vậy khi có nhiều lượt truy cập vào trang web sẽ cải thiện SEO và tăng điểm số cũng như xếp hạng trên Trang kết quả của Công cụ Tìm kiếm (SERP).
            </h6>
          </div>

          <div className="p-4">
            <h2 style={{ fontWeight: 700 }}>
Đóng vai trò hỗ trợ khách hàng</h2>
            <h6 className=" fw-medium mt-2">
              
Nếu một số câu hỏi thường gặp nhất được trả lời nhanh chóng trong phần Câu hỏi thường gặp thì khách hàng không cảm thấy cần phải liên hệ với bộ phận hỗ trợ khách hàng, bằng cách này, Câu hỏi thường gặp có thể đóng vai trò hỗ trợ khách hàng hiệu quả và hiệu quả tại trang web của bạn.
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AiFaqScreen;
