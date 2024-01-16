import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import Storage from "../../../../../../services/storage";

function Todo({ todo, index, removeTodo }) {
  return (
    <div class="relative m-1">
      <input
        type="search"
        value={todo}
        id="search-dropdown"
        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        required
      />
      <button
        onClick={() => removeTodo(index)}
        type="submit"
        class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <DeleteIcon />
      </button>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        for="search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div class="relative">
        <input
          type="search"
          id="search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <AddIcon />
        </button>
      </div>
    </form>
  );
}

function StudentReview() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    Storage.setSTUDENTREVIEW(todos);
  }, [todos]);

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default StudentReview;
