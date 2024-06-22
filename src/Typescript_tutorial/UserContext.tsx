import { createContext, useEffect, useState } from "react";

export interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const initialValues = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
};

const UserContext = createContext<UserContextType | null>(initialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        setUsers([{ name: "pedro", age: 23, isMarried: false }]);
        console.log(users);
    }, [users]);

    return (
        <UserContext.Provider value={initialValues}>
            {props.children}
        </UserContext.Provider>
    );
};
