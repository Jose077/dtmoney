import { createContext, ReactNode, useEffect, useState  } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionProvidersProps {
    children: ReactNode;
}


export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionProvidersProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransaction(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}> 
            { children }
        </TransactionsContext.Provider>
    )
}
