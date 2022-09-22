import React, { useState } from "react";
import deleteImg from "../delete.png";
import './Home.css';

function Todos() {
  const [activity, setActivity] = useState([
    { id: 1, title: "Mengerjakan Exercise", isDone: true },
    { id: 2, title: "Mengerjakan Assignment", isDone: false },
  ]);

  const handleCheckbox = (index) => {
    const newActivity = [...activity];
    newActivity[index].isDone = !newActivity[index].isDone;
    setActivity(newActivity);
  };
  const deleteActivity = (index) => {
    const newActivity = [...activity];
    newActivity.splice(index, 1);
    setActivity(newActivity);
  };

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addActivity(value);
    setValue("");
  };

  const addActivity = (text) => {
    const newTodos = [
      ...activity,
      { id: activity.length + 1, title: text, isDone: false },
    ];
    setActivity(newTodos);
  };

  {
    return (
      <div className="main">
        <h1>TODOS</h1>
        <p></p>
        <div>  
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add todo..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="inputActivity rounded-pill input-group-append"
            />
            <button onClick={() => handleSubmit} style={{ height: "30px" }} className="btn btn-outline">
              Submit
            </button>
          </form>
        </div>
        <div className="box p-2">
          {activity.length > 0 ? (
            <>
              {activity.map((element, index) => {
                return (
                  <>
                    <div className="list" key={element.id}>
                      <input
                        type="checkbox"
                        defaultChecked={element.isDone}
                        onClick={() => handleCheckbox(index)}
                        name=""
                        id=""
                      />
                      {element.isDone ? (
                        <p>
                          <s style={{ color: "red" }}>{element.title}</s>
                        </p>
                      ) : (
                        <p> {element.title}</p>
                      )}
                      <button
                        onClick={() => deleteActivity(index)}
                        style={{
                          background: "transparent",
                          border: "none",
                        }}
                      >
                        <img
                          srcSet={deleteImg}
                          alt=""
                          style={{ width: "30px" }}
                        />
                      </button>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Todos;