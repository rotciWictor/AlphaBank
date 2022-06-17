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
import Card from '../../images/alphabank-Mastercard-768x500.svg'


function Extract() {
    let { navigate } = useContext(Context);
  return (
    <>
      <Header onClick={() => navigate("/Logged")}>
        <Search placeholder="Digite sua Busca" />
        <OptionsHeader title="Atendimento">
          <BiHelpCircle size={38} />
        </OptionsHeader>
        <OptionsHeader
          title="Nome do cliente"
          onClick={() => navigate("/profile")}
        >
          <CgProfile size={38} />
        </OptionsHeader>
        <SimpleButton value="Sair" onClick={() => navigate("/")} />
      </Header>
      <Main2>
        <Operations>
          <MessageBox message="Cartão Virtual" />
          <OperationsView title="Cartão Virtual">
            <figure>
              <img src={Card} alt="Cartão" />
              <figcaption className="name-card">
                Manu Divertida e Brincalhona
              </figcaption>
              <div className="valid-thru">
                <figcaption>valid-thru</figcaption>
                <figcaption>12/29</figcaption>
              </div>
              <figcaption className="number-card">
                0000 0000 00000 0000
              </figcaption>
            </figure>
          </OperationsView>
        </Operations>
      </Main2>
    </>
  );
}

export default Extract;