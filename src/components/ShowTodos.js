import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ShowTodos.css";
import { CardActions } from "@mui/material";
import toast from "react-hot-toast";

const ShowTodos = () => {
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

  useEffect(() => {
    loaddatafrombackend();
  }, []);

  const deleteTodo = (id) => {
    console.log(id);
    fetch("http://localhost:5008/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        toast("Todo Deleted!!", {
          icon: "💀",
        });
        loaddatafrombackend();
      }
    });
  };

  const displaydata = () => {
    if (!loading) {
      return todolist.map((data) => (
        <Card className="Show__card" key={data._id}>
          <CardContent>
            <h2>{data.title}</h2>
          </CardContent>
          <CardActions>
            <button
              className="mybtn"
              onClick={(e) => {
                deleteTodo(data._id);
              }}
            >
              <i className="fa fa-2x fa-trash" aria-hidden="true"></i>
            </button>
          </CardActions>
        </Card>
      ));
    }
  };

  return <div>{displaydata()}</div>;
};

export default ShowTodos;
