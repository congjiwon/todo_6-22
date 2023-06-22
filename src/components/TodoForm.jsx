// import React from "react";
// import uuid from "react-uuid";

// function TodoForm({ title, setTitle, contents, setContents, setTodos, todos }) {
//   return (
//     <>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();

//           const newTodo = {
//             id: uuid,
//             title: title,
//             contents: contents,
//             isDone: false,
//           };

//           setTodos([...todos, newTodo]);
//           setTitle("");
//           setContents("");
//         }}
//       >
//         제목:
//         <input
//           type="text"
//           value={title}
//           onChange={(event) => {
//             setTitle(event.target.value);
//           }}
//         ></input>
//         내용:
//         <input
//           type="text"
//           value={contents}
//           onChange={(event) => {
//             setContents(event.target.value);
//           }}
//         ></input>
//         <button type="submit">추가하기</button>
//       </form>
//     </>
//   );
// }

// export default TodoForm;
