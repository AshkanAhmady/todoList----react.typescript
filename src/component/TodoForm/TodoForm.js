import styles from "./TodoForm.module.css";
import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef();

  // mounting method
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Please Fill The Input");
      //   مابفی کد اجرا نشود
      return;
    }
    props.submitTodo(input);
    setInput("");
  };

  return (
    <form
      className={`${styles.todoForm} ${props.edit && styles.editForm}`}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        onChange={changeHandler}
        value={input}
        placeholder={props.edit ? "Update Todo ..." : "Add Todo ..."}
        ref={inputRef}
      />
      <button type="submit">{props.edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
