import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { useState } from "react";

function App() {
  const [id, setId] = useState(1);
  const { data, isFetching, error } = useQuery({
    queryKey: ["todos", id],
    queryFn: getTodos,
  });
  if (error) {
    alert("An error occurred while fetching data.");
  }

  return (
    <>
      <div>
        {isFetching ? "Loading..." : JSON.stringify(data?.slice(0, 10))}
      </div>
      <button onClick={() => setId((prev) => prev + 1)}>Increment Id</button>
    </>
  );
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

export default App;
