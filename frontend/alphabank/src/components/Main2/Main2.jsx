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
import { AiFillEye } from "react-icons/ai";
import Operations from '../Operations/Operations';
import Box from '../Box/Box.jsx'
import MessageBox from '../MessageBox/MessageBox';
import MiscellaneousItem from '../miscellaneousItem/miscellaneousItem.jsx';



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
      <Operations>
        <MessageBox message="Vamo Gastar Porra!!!"/>
        <Box title="Visualizar Saldo" >
          <div className='div'>
            <h2>R$ 1.000,00</h2>
            <AiFillEye size={48}/>
          </div>
        </Box>
        <Box title="Depósito em Conta" />
        <Box title="Cartão Virtual" />
        <Box title="Transferência" />
      </Operations>
      <Navbar>
        <MiscellaneousItem title="Perguntas Frequentes"/>
        <MiscellaneousItem title="Propaganda"/>
      </Navbar>
    </S.div>
  );
}

export default Main2;