import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import Collapsable from "../../components/molecules/Collapsable/Collapsable";

const FaqsScreen = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: 120, marginBottom: 90 }}>
        <h1 className="text-center fw-bold" style={{ marginBottom: 50 }}>
          Frequently Asked Questions
        </h1>
        <div>
          <Collapsable
            question="What languages are supported by Questgen?"
            answer="Questgen's primary support is English but it does work well with several other languages such as Spanish, French, Hindi, etc. You should try entering the text in your language of choice and see if the output is satisfactory."
          />
          <Collapsable
            question="How much content can I give as input to Questgen's engine? How many questions are generated?"
            answer="Questgen can take text content of 2000 words as input and generates questions. If you have longer content, it is advised to divide it into chunks of 2000 words and generate questions with Questgen for each chunk. Depending on text length anywhere between 5 -20 questions are generated from every 2000-word article content."
          />
          <Collapsable
            question="Can I request customizations if I get Questgen's B2B API?"
            answer="Questgen's B2B API is geared toward companies planning to use Questgen and build an internal or external white-labeled solution. Customizations can be made to the API on a case-by-case basis depending on the complexity of the changes requested and the duration of the client contract. Please reach out for more information."
          />
          <Collapsable
            question="Can I get a trial of the API?"
            answer="The API output is similar to the output on the web application. Hence users are encouraged to try the web app version to see if the output matches their expectations. In order to get the trial API, the user should have an active subscription to the web app. This helps filter non-serious clients from serious clients. Also, API access is generally provided to verifiable businesses and corresponding email addresses."
          />
          <Collapsable
            question="What do unlimited runs for individual fair usage mean?"
            answer="Questgen considers 1500 runs monthly as individual fair use. If the given volume is exceeded any further usage for the month will be restricted. But you may request for higher volume if you have been a long-time customer or a customer on an annual subscription and have particularly high usage that month."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqsScreen;
