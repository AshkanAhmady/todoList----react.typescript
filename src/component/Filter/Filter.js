import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Uncompleted", label: "Uncompleted" },
  { value: "Completed", label: "Completed" },
];

const Filter = (props) => {
  // selectedOption is default value in react-select
  const filterHandler = (selectedOption) => {
    props.todosFilter(selectedOption);
  };

  return (
    <Select value={props.filter} onChange={filterHandler} options={options} />
  );
};

export default Filter;
