import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todolist, setTodolist] = useState([]);
  const [loading, setLoading] = useState(true);
  const loaddatafrombackend = () => {
    fetch("http://localhost:5008/todo/all")
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            setTodolist(data);
            setLoading(false);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <TodoContext.Provider value={{ loaddatafrombackend }}>
      {children}
    </TodoContext.Provider>
  );
};
