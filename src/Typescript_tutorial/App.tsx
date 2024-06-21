import "./main.scss";
import User from "./User";

function App() {
    return (
        <div>
            <User name={"Pedro"} age={22} isMarried={false} />
            <User name={"Arni"} age={36} isMarried={true} />
        </div>
    );
}

export default App;
