import React from "react";

function Todo({ todos, setTodos, isDone }) {
  return (
    <>
      {todos
        .filter((item) => {
          return item.isDone === isDone;
        })
        .map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "5px",
              }}
            >
              <p>{item.title}</p>
              <p>{item.contents}</p>
              <button
                onClick={() => {
                  const newTodos = todos.filter((filteredItem) => {
                    return filteredItem.id !== item.id;
                  });

                  setTodos(newTodos);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  const newTodos = todos.map((filteredItem) => {
                    if (filteredItem.id === item.id) {
                      return {
                        ...filteredItem,
                        isDone: !filteredItem.isDone,
                      };
                    } else {
                      return filteredItem;
                    }
                  });

                  setTodos(newTodos);
                }}
              >
                {item.isDone ? "취소하기" : "완료하기"}
              </button>
            </div>
          );
        })}
    </>
  );
}

export default Todo;
