import React, { ReactElement } from 'react';

const example = (): ReactElement => {
  return <div></div>;
};
export default example;
// export type Todo = {
//   id: number;
//   text: string;
//   done: boolean;
// };

// type TodosState = Todo[];

// type Action = { type: 'CREATE'; text: string } | { type: 'TOGGLE'; id: number } | { type: 'REMOVE'; id: number };

// const TodosStateContext = createContext<TodosState | undefined>(undefined);

// type TodosDispatch = Dispatch<Action>;

// const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

// function todoReducer(state: TodosState, action: Action): TodosState {
//   switch (action.type) {
//     case 'CREATE':
//       return state.concat(action.todo);
//     case 'TOGGLE':
//       return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
//     case 'REMOVE':
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// }

// const initialTodos = [
//   {
//     id: 1,
//     text: 'JavaScript 공부하기',
//     done: false,
//   },
//   {
//     id: 2,
//     text: '매차쿠차 하기',
//     done: false,
//   },
// ];

// const TodoProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(todoReducer, initialTodos);

//   return (
//     <TodosStateContext.Provider value={state}>
//       <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
//     </TodosStateContext.Provider>
//   );
// };

// const useTodoState = () => useContext(TodosStateContext);
// const useTodoDispatch = () => useContext(TodosDispatchContext);

// export { TodoProvider, useTodoState, useTodoDispatch };
