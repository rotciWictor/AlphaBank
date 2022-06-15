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


function Main2() {
  const iconsSize = 40
  return (
    <S.div>
      <Navbar>
        <NavButton title="Visualizar Perfil">
          <CgProfile size={iconsSize} />
        </NavButton>
        <NavButton title="Depósito em Conta">
          <RiLuggageDepositFill size={iconsSize} />
        </NavButton>
        <NavButton title="Transferências">
          <BsCashStack size={iconsSize} />
        </NavButton>
        <NavButton title="Alterar Senha">
          <ImKey size={iconsSize} />
        </NavButton>
        <NavButton title="Cartão Virtual">
          <BsCreditCardFill size={iconsSize} />
        </NavButton>
        <NavButton title="Encerrar Conta">
          <BiWindowClose size={iconsSize} />
        </NavButton>
      </Navbar>
    </S.div>
  );
}

export default Main2;