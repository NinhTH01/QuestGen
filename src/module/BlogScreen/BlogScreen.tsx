import { Row, Button } from "react-bootstrap";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import { useSelector } from "react-redux";
import { currentWidth } from "../../global/selectors";
import styles from "./PricingScreen.module.css";

const BlogScreen = () => {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

export default BlogScreen;
