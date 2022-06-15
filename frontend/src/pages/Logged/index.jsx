import Header from "../../components/Header/Header";
import Main2 from "../../components/Main2/Main2";
import { Context } from "../../context/Context.jsx";
import { useContext, useEffect } from "react";
import {BiHelpCircle} from "react-icons/bi"
import { CgProfile } from "react-icons/cg";
import Search from "../../components/Search/Search";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import SimpleButton from "../../components/SimpleButton/SimpleButton"
import { AiFillEye } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import Operations from "../../components/Operations/Operations";
import Box from "../../components/Box/Box";
import MessageBox from "../../components/MessageBox/MessageBox";

function Home() {
  let { navigate, getBalance, balance, transaction, setTransaction } = useContext(Context);

  useEffect(()=>{getBalance()},[transaction])

  return (
    <>
      <Header>
        <Search placeholder="Digite sua Busca" />
        <OptionsHeader title="Atendimento">
          <BiHelpCircle size={38} />
        </OptionsHeader>
        <OptionsHeader title="Nome do cliente">
          <CgProfile size={38} />
        </OptionsHeader>
        <SimpleButton value="Sair" onClick={() => navigate("/")} />
      </Header>
      <Main2>
        <Operations>
          <MessageBox message="Vamo Gastar Porra!!!" />
          <Box title="Visualizar Saldo" onClick={() => navigate("/Extract")}>
            <div style={{display:"flex", gap:"10px"}}>
              <h2>R$ {balance}</h2>
              <AiFillEye size={48} />
            </div>
          </Box>
          <Box title="Depósito em Conta" onClick={() => navigate("/accountdeposit")}>
            <div>
              <h2><GiReceiveMoney size={48} /></h2>
            </div>
          </Box>
          <Box title="Cartão Virtual" onClick={() => navigate("/virtualcard")}>
            <div>
              <h2><FaMoneyCheck size={48} /></h2>
            </div>
          </Box>
          <Box title="Transferência" onClick={() => navigate("/transfers")}>
            <div>
              <h2><GiPayMoney size={48} /></h2>
            </div>
          </Box>
        </Operations>
      </Main2>
    </>
  );
}

export default Home;
