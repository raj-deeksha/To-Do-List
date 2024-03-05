/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";
function App() {
  const [toDoList, setToDoList] = useState([]);
  function addTask(taskName) {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList,newTask]);
    
  }
  function deletTask(deletTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deletTaskName));
  }
  function toggleCheck(taskName) {
    setToDoList((prevToDoList)=> prevToDoList.map(task => task.taskName === taskName ? {
      ...task,
      checked: !task.checked
    } : task)
    )
  }
  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>Task Master {toDoList.length}</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deletTask={deletTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done</p>
          ) : null}
        </div>
      </div>
      {/* <Stats toDoList={toDoList } /> */}
    </>
  );
}

export default App;
