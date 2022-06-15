// import Main from "./components/Main/Main";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import image from "../../images/loginPageImage.png"
import Login from "../../components/Login/Login.jsx"
import logo from "../../images/logo.svg"
import HeaderButton from "../../components/headerButton/headerButton";
import { useNavigate } from "react-router-dom";
import {AiOutlineUserAdd} from "react-icons/ai"


function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Header>
        <HeaderButton
          title="Cadastre-se"
          onClick={() => {
            navigate("/Register");
          }}
        >
          <AiOutlineUserAdd size={38} />
        </HeaderButton>
      </Header>
      <Main image={image} imageSize="80vh">
        <img src={logo} />
        <Login />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
