import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import { useState } from "react";
import { TodoListComponentProps } from "../../Interfaces";

const TodoList: React.FC<TodoListComponentProps> = ({ todos, onComplete, onDelete, updateTodo }) => {
  // این استیت برای این است که بفهمیم روی ادیت کلیک شده
  const [edit, setEdit] = useState({ id: 0, text: "", isComplete: false });

  const editTodo = (newValue: string) => {
    updateTodo(newValue, edit.id);
    setEdit({ id: 0, text: "", isComplete: false });
  };

  const renderTodos = () => {
    if (todos.length === 0)
      return <p className={styles.addMessage}>Add Your Todo</p>;
    return (
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              // اگر مقدار تودو داخلش بود یعنی روی ادیت کلیک شده
              onEdit={() => setEdit(todo)}
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.todoList}>
      {/* اگر روی دکمه ادیت کلیک کردیم */}
      {edit.id ? <TodoForm edit={edit} submitTodo={editTodo} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
