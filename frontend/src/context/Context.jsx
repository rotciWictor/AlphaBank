import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export const Provider = (props) => {
    
    const [balance, setBalance] = useState();
    const [transaction, setTransaction] = useState(false);
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState ('');
    const [secondPassword, setSecondPassword] = useState('');

    function login() {
        fetch(`http://localhost:4000/login`, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': "http://localhost:3000",
              'Access-Control-Allow-Credentials': true
            },
            credentials: "include",
            body: JSON.stringify({
              cpf: cpf,
              password: password
            })
          })
            .then(function (response) {
              if (response.status >= 200 && response.status < 300) {
                console.log("Verificar problema. STATUS:" + response.status);
                response.text().then(function (data) {
                  console.log(data);
                });
              } else {
                    response.json().then(function (data) { //colocar no console que o cliente tá logado
                        console.log(data); 
                        localStorage.setItem("user", JSON.stringify(data));
                        navigate("/Logged");
                    });
                }
            })
            .catch(function (err) {
              console.log("Verificar ERRO:" + err);
            });
    }

    function register() { 
        fetch("http://localhost:4000/client/create", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "http://localhost:3000",
                'Access-Control-Allow-Credentials': true
            },
            credentials: "include", 
            body: JSON.stringify({
                name: name,
                cpf: cpf,
                birthday: birthday,
                password: password
            })
        })
            .then(function (response) {
                if (response.status !== 200 || response.status !== 201) { //erro vindo do banco de dados
                    console.log("Verificar problema. STATUS:" + response.status);
                    response.text().then(function (data) {
                        console.log(`${data}`);
                        });
                    }
                else {
                    response.json().then(function (data) { //cliente registrado
                            console.log(data);
                    });
                }
            })
            .catch(function (err) {
                console.log("Verificar ERRO:" + err);
            });
        }

    const getBalance = async() => {
        try {
            let data = await fetch("http://localhost:4000/balance", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    cpf:"12345678901"
                },
            })
            let resp = await data.json();
            console.log(resp);
            setBalance(resp)
        } catch (error) {
            console.error(error.message)
        }
    }

    const navigate = useNavigate()
    
    return <Context.Provider
            value={{
                navigate,
                getBalance,
                balance,
                setBalance,
                transaction,
                setTransaction,
                cpf,
                setCpf,
                name,
                setName,
                birthday,
                setBirthday,
                password,
                setPassword,
                secondPassword,
                setSecondPassword,
                register,
                login,
            }}
        >
            {props.children}
        </Context.Provider>
    
}
