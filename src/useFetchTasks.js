import { useState, useEffect } from "react";

const useFetchTasks = (url, config={}) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(url, config)
    .then((res) => res.json())
    .then((data) => Array.isArray(data)? setTasks(data) : null)
    .catch((err) => {
      setError(err)
      console.log(err)
    }).finally(() => {
      setIsLoading(false);
    });
  }, [])

  return {tasks, isLoading, error};
}

export default useFetchTasks;