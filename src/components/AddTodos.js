import React from "react";
import { Formik } from "formik";
import "./AddTodos.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

const AddTodos = () => {
  const userform = {
    title: "",
  };

  const { loaddatafrombackend } = useContext(TodoContext);

  const userSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5008/todo/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        loaddatafrombackend();
      }
      console.log(loaddatafrombackend);
    });
  };

  return (
    <div className="AddTodos">
      <Formik initialValues={userform} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className="my_form" onSubmit={handleSubmit}>
            <button className="button__add" type="submit">
              Add
            </button>
            <div className="input__box">
              <input
                type="text"
                id="title"
                value={values.title}
                onChange={handleChange}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTodos;
