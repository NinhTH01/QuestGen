import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import Collapsable from "../../components/molecules/Collapsable/Collapsable";

const FaqsScreen = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: 120, marginBottom: 90 }}>
        <h1 className="text-center fw-bold" style={{ marginBottom: 50 }}>
          Những câu hỏi thường gặp
        </h1>
        <div>
          <Collapsable
            question="QuestGen hỗ trợ những ngôn ngữ nào?"
            answer="QuestGen hỗ trợ chính 2 ngôn ngữ là Tiếng Anh và Tiếng Việt nhưng cũng đồng thời hoạt động với một số ngôn ngữ khác. Bạn nên thử nhập văn bản của ngôn ngữ đó để xem nó có hoạt động hay không."
          />
          <Collapsable
            question="Giới hạn số lượng nội dung mà QuestGen tạo ra? Có bao nhiêu câu hỏi có thể được tạo ra"
            answer="QuestGen có thể xử lý được 1 số lượng lớn kí tự. Nếu bạn có một nội dung quá dài thì nên chia ra thành nhiểu đoạn nhỏ hơn.Số lượng câu hỏi phụ thuộc vào số lượng độ dài của nội dung mà bạn truyền vào."
          />
          <Collapsable
            question="Có thể sử dụng hình ảnh để tạo câu hỏi được không?"
            answer="Bạn có thể update hình ảnh lên và chúng tôi sẽ convert chúng thành pdf để có thể sử dụng được cho QuestGen."
          />
          <Collapsable
            question="GuestGen có mất phí không?"
            answer="QuestGen hoàn toàn miễn phí."
          />
          {/* <Collapsable
            question="What do unlimited runs for individual fair usage mean?"
            answer="Questgen considers 1500 runs monthly as individual fair use. If the given volume is exceeded any further usage for the month will be restricted. But you may request for higher volume if you have been a long-time customer or a customer on an annual subscription and have particularly high usage that month."
          /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqsScreen;
