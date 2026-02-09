import { useQuery } from "@tanstack/react-query";
import "./App.css";
import createTodoQueryOptions from "./queryOptions/createTodoQueryOptions";

function App() {
  const { data, isFetching, error } = useQuery(createTodoQueryOptions());
  if (error) {
    alert("An error occurred while fetching data.");
  }

  return (
    <>
      <div>
        {isFetching ? "Loading..." : JSON.stringify(data?.slice(0, 10))}
      </div>
      <div>{data?.[0]?.title}</div>
      {/* <button onClick={() => setId((prev) => prev + 1)}>Increment Id</button> */}
    </>
  );
}

export default App;
