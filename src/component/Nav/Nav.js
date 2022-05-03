import Filter from "../Filter/Filter";
import styles from "./Nav.module.css";

const Nav = ({ todos, todosFilter, filter }) => {
  const uncompleteTodos = todos.filter(
    (todo) => todo.isComplete == false
  ).length;

  return (
    <div className={`${styles.nav} ${todos.length > 0 && styles.upgraded}`}>
      {todos.length > 0 && (
        <div className={styles.options}>
          <div className={styles.uncompleteds}>
            <p>in {todos.length} todos:</p>
            {uncompleteTodos != 0 ? (
              <>
                <span className={styles.number}>{uncompleteTodos}</span>
                <span>todos are not completed</span>
              </>
            ) : (
              <>
                <span>All todos completed</span>
              </>
            )}
          </div>
          <div className={styles.filter}>
            <Filter filter={filter} todosFilter={todosFilter} />
          </div>
        </div>
      )}
      <h1>Todo-List App</h1>
    </div>
  );
};

export default Nav;
