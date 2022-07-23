import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";
function App() {
    const [toDo, setToDo] = useState();
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (!toDo) return;
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    return (
        <div>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    value={toDo}
                    placeholder="Write your to do"
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
