import { createContext, Dispatch, useReducer, useContext } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

type childrenProps = {
  children: React.ReactNode;
};
const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action = { type: 'CREATE'; text: string } | { type: 'TOGGLE'; id: number } | { type: 'REMOVE'; id: number };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

const initialState: TodosState = [{ id: 1, text: 'good', done: false }];

const todosReducer = (state: TodosState, action: Action): TodosState => {
  const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
  switch (action.type) {
    case 'CREATE':
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error('Unhandled action');
  }
};

export const TodoContextProvider = ({ children }: childrenProps) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>{children}</TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
};

export const useTodosState = () => {
  const state = useContext(TodosStateContext);
  const nextId = useContext(TodosStateContext);
  if (!state || !nextId) throw new Error('TodosProvider not found');
  return { state, nextId };
};

export const useTodosDispatch = () => {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
};
