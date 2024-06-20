import { useEffect, useState } from "react";
import "./main.scss";

const URL = "https://jsonplaceholder.typicode.com";
const ITEM = "users";

type UserType = {
    name: string;
    email: string;
};

type UserData = {
    adress: object;
    company: object;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
};

function App() {
    const [users, setUsers] = useState<UserData[] | null>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [filterInput, setFilterInput] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<any>([]);

    useEffect(() => {
        const filtered = users?.filter((user) =>
            user.name.toLowerCase().includes(filterInput.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [filterInput, users]);

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            try {
                const res = await fetch(`${URL}/${ITEM}`);
                if (!res.ok) throw new Error("Bad server response");

                const data = await res.json();
                setUsers(data);
                console.log(data);
            } catch (error) {
                console.error(error);
                setError(
                    `Unexpected error occured: ${(error as Error).message}`
                );
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    return (
        <section className="users">
            <div className="users_options">
                <div className="users_options-filter">
                    <p>Filter by name</p>
                    <input
                        type="text"
                        onChange={(e) => setFilterInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="users_container">
                <h1>List of users:</h1>
                {loading ? (
                    <h3>Loading...</h3>
                ) : error ? (
                    <h3>{error}</h3>
                ) : (
                    <ul>
                        {filteredUsers.length > 0
                            ? filteredUsers.map((user) => {
                                  return (
                                      <User
                                          name={user.name}
                                          email={user.email}
                                          key={user.id}
                                      />
                                  );
                              })
                            : users?.map((user) => {
                                  return (
                                      <User
                                          name={user.name}
                                          email={user.email}
                                          key={user.id}
                                      />
                                  );
                              })}
                    </ul>
                )}
            </div>
        </section>
    );
}

function User({ name, email }: UserType) {
    return (
        <li>
            <p className="user_name">Name: {name}</p>
            <p className="user_email">Email: {email}</p>
        </li>
    );
}
export default App;
