import Header from "../../components/Header/Header";
import Main2 from "../../components/Main2/Main2";
import { Context } from "../../context/Context.jsx";
import { useContext } from "react";
import {BiHelpCircle} from "react-icons/bi"
import { CgProfile } from "react-icons/cg";

function Home() {
  let { navigate } = useContext(Context);
  return (
    <>
      <Header>
        <input className="search" type="text" placeholder="Digite a busca" />
        <div className="help">
          <BiHelpCircle size={38} />
          <h2>Atendimento</h2>
        </div>
        <div className="profile">
          <CgProfile size={38} />
          <h2>Nome Cliente</h2>
        </div>
        <input className="exit" type="button" value="Sair" />
      </Header>
      <Main2>
        
      </Main2>
    </>
  );
}

export default Home;
