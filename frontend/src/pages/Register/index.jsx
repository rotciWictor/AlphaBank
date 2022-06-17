import Main from "../../components/Main/Main.jsx"
import Header from "../../components/Header/Header.jsx";
import image from "../../images/registerPageImage.png"
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import HeaderButton from "../../components/headerButton/headerButton.jsx";
import { BiLogInCircle } from "react-icons/bi";
import { Context } from "../../context/Context.jsx";
import { useContext } from "react";

function Register() {
  let { navigate } = useContext(Context);
  return (
    <>
      <Header onClick={() => navigate("/")}>
        <HeaderButton
          title="Entrar"
          onClick={() => {
            navigate("/");
          }}
        >
          <BiLogInCircle size={38} />
        </HeaderButton>
      </Header>
      <Main image={image} imageSize="90vh">
        <RegisterForm />
        <div className="papagaio"></div>
      </Main>
    </>
  );
}

export default Register;