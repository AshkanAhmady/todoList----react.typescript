import Select from "react-select";
import { FilterComponentProps } from "../../Interfaces";

const options = [
  { value: "All", label: "All" },
  { value: "Uncompleted", label: "Uncompleted" },
  { value: "Completed", label: "Completed" },
];

const Filter: React.FC<FilterComponentProps> = (props) => {
  // selectedOption is default value in react-select
  const filterHandler = (selectedOption: any) => {
    props.todosFilter(selectedOption);
  };

  return (
    <Select value={props.filter} onChange={filterHandler} options={options} />
  );
};

export default Filter;
