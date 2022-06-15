import React from 'react';
import * as S from "./style";
import Navbar from '../Navbar/Navbar.jsx';
import NavButton from "../NavButton/NavButton";
import { BiWindowClose } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiLuggageDepositFill, RiNavigationLine } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { ImKey } from "react-icons/im";
import { BsCreditCardFill } from "react-icons/bs";
import MiscellaneousItem from '../miscellaneousItem/miscellaneousItem.jsx';
import { Context } from "../../context/Context.jsx";
import { useContext } from "react";


function Main2(props) {
  let { navigate } = useContext(Context)
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
        <NavButton title="Encerrar Conta" onClick={() => navigate("/closeaccount")}>
          <BiWindowClose size={iconsSize} />
        </NavButton>
      </Navbar>
      {props.children}
      <Navbar>
        <MiscellaneousItem title="Perguntas Frequentes" />
        <MiscellaneousItem title="Propaganda" />
      </Navbar>
    </S.div>
  );
}

export default Main2;