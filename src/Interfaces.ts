export interface TodoInterface {
    id: number;
    isComplete: boolean;
    text: string;
}



export interface FilterComponentProps {
    filter: {value: string, label: string};
    todosFilter: (selectedOption: {value: string, label: string}) => void;
    todos?: TodoInterface[]
}
// #############
// #############
// #############





export interface TodoComponentProps {
    todo: TodoInterface; 
    onComplete: () => void;
    onDelete: () => void;
    onEdit: any;
}
// #############
// #############
// #############





export interface TodoFormComponentProps {
    submitTodo: (input: string) => void;
    edit?: TodoInterface;
}
// #############
// #############
// #############





export interface TodoListComponentProps {
    todos: TodoInterface[];
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
    updateTodo: (newValue: string, id: number) => void;
}