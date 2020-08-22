import React from "react";
import "./styles.css";
import useFetchTasks from "./useFetchTasks";

export default function App() {
  const {tasks, isLoading, error} = useFetchTasks("https://jsonplaceholder.typicode.com/todos");
  return (
    <div className="App">
      {isLoading ? <p>Loading...</p> : null}
      {tasks.map((task, taskIndex) => {
        return <p key={taskIndex}>{task.title}</p>;
      })}
      {error ? <pre>{JSON.stringify(error)}</pre> : null}
      
    </div>
  );
}
