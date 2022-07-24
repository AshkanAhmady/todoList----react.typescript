import styles from "./TodoForm.module.css";
import React, { useEffect, useRef, useState } from "react";
import { TodoFormComponentProps } from "../../Interfaces";

const TodoForm: React.FC<TodoFormComponentProps> = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef<HTMLInputElement>(null);

  // mounting method
  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
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
