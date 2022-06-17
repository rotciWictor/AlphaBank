import React from 'react';
import * as S from "./style";
import Navbar from '../Navbar/Navbar.jsx';
import NavButton from "../NavButton/NavButton";
import { BiWindowClose } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { ImKey } from "react-icons/im";
import { BsCreditCardFill } from "react-icons/bs";
import MiscellaneousItem from '../miscellaneousItem/miscellaneousItem.jsx';
import { Context } from "../../context/Context.jsx";
import { useContext } from "react";
import Emovere from "../../images/logo-emovere.png";
import Reverie from "../../images/reverie_logo.svg";
import Logossauro from "../../images/logosauro.png";
import { useState,useEffect } from 'react';
import { Advertising } from '../Advertising/style';


function Main2(props) {

  const [i, seti] = useState(0);
  const logos = [Logossauro, Reverie, Emovere];
  
  function changeLogo() {
    if (i == (logos.length - 1)) {
      seti(0);
    } else {
      let temp = i;
      temp++;
      seti(temp);
    }
  }
  useEffect(() =>{
    
    setInterval(changeLogo, 5000);
    
  },[]);

  const { navigate } = useContext(Context)
  const iconsSize = 40
  return (
    <S.div>
      <Navbar>
        <NavButton
          title="Visualizar Perfil"
          onClick={() => navigate("/profile")}
        >
          <CgProfile size={iconsSize} />
        </NavButton>
        <NavButton
          title="Depósito em Conta"
          onClick={() => navigate("/accountdeposit")}
        >
          <RiLuggageDepositFill size={iconsSize} />
        </NavButton>
        <NavButton
          title="Transferências"
          onClick={() => navigate("/transfers")}
        >
          <BsCashStack size={iconsSize} />
        </NavButton>
        <NavButton
          title="Alterar Senha"
          onClick={() => navigate("/changepassword")}
        >
          <ImKey size={iconsSize} />
        </NavButton>
        <NavButton title="Cartão Virtual">
          <BsCreditCardFill
            size={iconsSize}
            onClick={() => navigate("/virtualcard")}
          />
        </NavButton>
        <NavButton
          title="Encerrar Conta"
          onClick={() => navigate("/closeaccount")}
        >
          <BiWindowClose size={iconsSize} />
        </NavButton>
      </Navbar>
      {props.children}
      <Navbar>
        <MiscellaneousItem className="title" title="">
          <p>
            Existe algum risco em colocar meu dinheiro na conta do Alphabank?
          </p>
          <p> Não tem nenhuma tarifa?</p>
          <p> Quem emite o Cartão Alphabank?</p>
          <p>
            Se eu tiver a conta do Nubank vou ter o cartão de crédito aprovado?
          </p>
        </MiscellaneousItem>
        <MiscellaneousItem className="title" title="">
          <Advertising>
            <img src={logos[i]} alt="" />
          </Advertising>
        </MiscellaneousItem>
      </Navbar>
    </S.div>
  );
}

export default Main2;