import { useState } from "react";

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
}

function User(props: Props) {
    //     const [personBio, setPersonBio] = useState<string | null>("");

    //     function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //         setPersonBio(e.target.value);
    //     }

    //     function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    //     };

    return (
        <div className="person">
            <p>Name {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is married" : "is single"}</p>
        </div>
    );
}

export default User;
