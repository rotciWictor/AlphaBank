import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export const Provider = (props) => {
    
    const [balance, setBalance] = useState();
    const [transaction, setTransaction] = useState(false);

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
                setTransaction
            }}
        >
            {props.children}
        </Context.Provider>
    
}
