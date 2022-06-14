import Main from "./components/registerMain/registerMain";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./style/global";

function Register() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Register;