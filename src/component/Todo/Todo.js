import styles from "./Todo.module.css";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <li
      className={`${styles.todo} ${
        todo.isComplete == true ? styles.completedLi : ""
      }`}
    >
      <div className={todo.isComplete == true ? styles.completed : ""}>
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className={styles.edit}>
          edit
        </button>
        <button className={styles.complete} onClick={onComplete}>
          {todo.isComplete == true ? "uncomplete" : "complete"}
        </button>
        <button onClick={onDelete} className={styles.delete}>
          delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
