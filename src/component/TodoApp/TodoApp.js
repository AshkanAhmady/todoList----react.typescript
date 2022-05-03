import { useEffect, useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Nav from "../Nav/Nav";

const TodoApp = () => {
  // تمام تودو ها در ایننجا بصورت آرایه جمع آوری میشه
  const [todos, setTodos] = useState([]);
  // یک استیت کمکی برای نمایش تودو های فیلتر شده
  const [filteredTodos, setFilteredTodos] = useState([]);
  // this state is for select box
  const [filter, setFilter] = useState({ value: "All", label: "All" });

  // هر تغییری که در تودو اعمال شد در فیلترد تودوز هم اعمال شدود
  useEffect(() => {
    todosFilterHandler(filter);
  }, [todos]);

  const submitTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const cloneTodos = [...todos];
    const index = cloneTodos.findIndex((todo) => todo.id === id);
    const todo = { ...cloneTodos[index] };

    todo.isComplete = !todo.isComplete;
    cloneTodos[index] = todo;

    setTodos(cloneTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (newValue, id) => {
    const cloneTodos = [...todos];
    const index = cloneTodos.findIndex((todo) => todo.id === id);
    const todo = { ...cloneTodos[index] };

    todo.text = newValue;
    cloneTodos[index] = todo;

    setTodos(cloneTodos);
  };

  const todosFilterHandler = (selectedOption) => {
    switch (selectedOption.value) {
      case "All": {
        setFilteredTodos(todos);
        setFilter(selectedOption);
        break;
      }
      case "Uncompleted": {
        setFilteredTodos(todos.filter((todo) => !todo.isComplete));
        setFilter(selectedOption);
        break;
      }
      case "Completed": {
        setFilteredTodos(todos.filter((todo) => todo.isComplete));
        setFilter(selectedOption);
        break;
      }
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <>
      <Nav filter={filter} todosFilter={todosFilterHandler} todos={todos} />
      <div className={styles.container}>
        <TodoForm submitTodo={submitTodo} />
        <TodoList
          onComplete={completeTodo}
          onDelete={deleteTodo}
          todos={filteredTodos}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
};

export default TodoApp;
