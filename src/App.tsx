import styles from "./App.module.css";
import TodoApp from "./component/TodoApp/TodoApp";

function App() {
  return (
    <div className={styles.app}>
      <TodoApp />
    </div>
  );
}

export default App;
