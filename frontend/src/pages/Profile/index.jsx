import React from 'react';
import Header from "../../components/Header/Header";
import Main2 from "../../components/Main2/Main2";
import { Context } from "../../context/Context.jsx";
import { useContext } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Search from "../../components/Search/Search";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import Operations from "../../components/Operations/Operations";
import MessageBox from "../../components/MessageBox/MessageBox";
import OperationsView from '../../components/OperationsView/OperationsView';
import Input from '../../components/Input/Input';

function Extract() {
    let { navigate } = useContext(Context);
  return (
    <>
      <Header onClick={() => navigate("/Logged")}>
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
          <MessageBox message="Perfil" />
          <OperationsView title="Seu Perfil">
            <div className="div">
              <CgProfile size={85} />
              <h3> Olá Lisa, Mona</h3>
            </div>
            <Input label="CPF" />
            <Input label="ID" />
          </OperationsView>
        </Operations>
      </Main2>
    </>
  );
}

export default Extract;