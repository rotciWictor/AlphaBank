import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export const Provider = (props) => {
    const [balance, setBalance] = useState();
    const [transaction, setTransaction] = useState(false);
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [changedPassword, setChangedPassword] = useState("");
    const [amount, setAmount] = useState("");
    const [cpfDest, setCpfDest] = useState("");
    const [nomeCliente, setNomeCliente] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardvalid, setCardValid] = useState("");

    function login() {
        fetch(`http://localhost:4000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                cpf: cpf,
                password: password,
            }),
        })
            .then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    console.log(
                        "Verificar problema. STATUS:" + response.status
                    );
                    response.json().then(function (data) {
                        console.log("aquiiii", data);
                        localStorage.setItem("user", JSON.stringify(data));
                        navigate("/Logged");
                        setPassword("");
                    });
                } else {
                    response.json().then(function (data) {
                        //colocar no console que o cliente tá logado
                        console.log(data);
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
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": true,
            },
            credentials: "include",
            body: JSON.stringify({
                name: name,
                cpf: cpf,
                birthday: birthday,
                password: password,
            }),
        })
            .then(function (response) {
                if (response.status !== 200 || response.status !== 201) {
                    //erro vindo do banco de dados
                    console.log(
                        "Verificar problema. STATUS:" + response.status
                    );
                    response.json().then(function (data) {
                        console.log(`${data}`);                        
                        navigate("/Logged");
                    });
                } else {
                    response.json().then(function (data) {
                        //cliente registrado
                        console.log(data);
                    });
                }
            })
            .catch(function (err) {
                console.log("Verificar ERRO:" + err);
            });
    }

    const getName = async () => {
        try {
            let data = await fetch("http://localhost:4000/getName", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    cpf: cpf,
                },
            });
            let resp = await data.json();
            console.log(resp);
            setNomeCliente(resp.name);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getBalance = async () => {
        try {
            let data = await fetch("http://localhost:4000/balance", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    cpf: cpf,
                },
            });
            let resp = await data.json();
            console.log(resp);
            setBalance(resp.balance_available);
        } catch (error) {
            console.error(error.message);
        }
    };

    const transfer = async () => {
        try {
            await fetch("http://localhost:4000/maketransaction", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cpf: cpf,
                    cpfDest: cpfDest,
                    amount: amount,
                }),
            });
            setTransaction(!transaction);
            console.log(`Amount:${amount}, CPFDEST: ${cpfDest}`);
            setAmount("");
            setCpfDest("");
            console.log("cpf: ",cpf)
            navigate("/Logged")
        } catch (error) {
            console.log.error(error.message);
        }
    };

    const deposit = async () => {
        try {
            await fetch("http://localhost:4000/deposit",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cpf: cpf,
                amount: amount,
            }),
        })
        navigate("/Logged");
        setAmount("");
        } catch (error) {
            console.error(error.message)
        }
    }

    const changePassword = async() => {

        const passwordFormat = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/;
        
        
        try {
            let data = await fetch("http://localhost:4000/getpassword",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    cpf:cpf
                }
            });
            let passwordDB = await data.json();
            console.log(passwordDB.password);
            
            if (passwordDB.password === password) {
                if(secondPassword === changedPassword){
                    let testPassword = passwordFormat.test(changedPassword);
                    let testSecondPassword = passwordFormat.test(secondPassword);

                    if(testSecondPassword === true && testPassword === true){
                        await fetch("http://localhost:4000/changepassword", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                password:changedPassword,
                                cpf:cpf
                            }),
                        })
                        navigate("/Logged");
                        setPassword("");
                        setSecondPassword("");
                        setChangedPassword("");
                    }
                } else {
                    console.log("Senhas diferentes!")
                }             
            } else {
                console.log("Senha incorreta");
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    const navigate = useNavigate();

    return (
        <Context.Provider
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
                amount,
                setAmount,
                transfer,
                cpfDest,
                setCpfDest,
                login,
                deposit,
                changedPassword,
                setChangedPassword,
                changePassword,
                getName,
                nomeCliente,
                setNomeCliente,
                cardName,
                setCardName,
                cardNumber,
                setCardNumber,
                cardvalid,
                setCardValid
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
