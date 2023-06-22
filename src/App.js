import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Todo from "./components/Todo";
// import TodoForm from "./components/TodoForm";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "1",
      contents: "11",
      isDone: false,
    },
    {
      id: uuid(),
      title: "2",
      contents: "22",
      isDone: true,
    },
  ];

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <header>todolist 만들기</header>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const newTodo = {
            id: uuid,
            title: title,
            contents: contents,
            isDone: false,
          };

          setTodos([...todos, newTodo]);
          setTitle("");
          setContents("");
        }}
      >
        제목:
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        내용:
        <input
          type="text"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        ></input>
        <button type="submit">추가하기</button>
      </form>
      <div>
        <h1>진행중</h1>
        <Todo todos={todos} setTodos={setTodos} isDone={false} />

        <h1>완료</h1>
        <Todo todos={todos} setTodos={setTodos} isDone={true} />
      </div>
    </div>
  );
}

export default App;
