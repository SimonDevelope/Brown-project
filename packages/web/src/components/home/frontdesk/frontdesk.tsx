import React, { ReactElement, useState, useReducer, useRef, useEffect } from 'react';
import Time from '../../utils/clock/time';
import TodoList from './todolist/todolist';
import './frontdesk.scss';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
export type Action = { type: 'CREATE'; text: string } | { type: 'TOGGLE'; id: number } | { type: 'REMOVE'; id: number };

const frontdesk = (): ReactElement => {
  const nextId = useRef(0);

  const getLocalItem = () => {
    const todoList = window.localStorage.getItem('todo-list');
    console.log(todoList);

    if (todoList) {
      return JSON.parse(window.localStorage.getItem('todo-list') || 'null');
    } else {
      return [];
    }
  };
  const todosReducer = (state: TodosState, action: Action): TodosState => {
    switch (action.type) {
      case 'CREATE':
        return state.concat({
          id: nextId.current,
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

  const [todos, dispatch] = useReducer(todosReducer, getLocalItem());
  const [value, setValue] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
    nextId.current += 1;
  };
  console.log(todos);

  useEffect(() => {
    window.localStorage.setItem('todo-list', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="frontdesk-total-view-port">
      <div className="frontdesk-content-outter-wrapper">
        <div className="frontdesk-time-hospitality-word-wrapper">
          <div className="frontdesk-time-zone-outter-wrapper">
            <Time />
          </div>
          <div className="frontdesk-hospitality-word">
            <span>안녕하세요, simon님</span>
          </div>
          <div className="frontdesk-weather-zone-outter-wrapper"></div>
        </div>
        <div className="frontdesk-simple-todolist-area">
          <div className="frontdesk-simple-todolist-inner-wrapper">
            <span className="frontdesk-simple-todolist-subject">{`${
              todos.length > 0 ? `${todos.length}개의 할 일이 남았습니다.` : `오늘 계획은 어떻게 되시나요?`
            }`}</span>
          </div>
          <form className="front-desk-insert-form" onSubmit={onSubmit}>
            <input
              className={`${todos.length > 4 ? 'donot-show-input' : 'show-input'}`}
              value={value}
              onChange={onChange}
            />
          </form>
          <div className="frontdesk-simple-todolist-view-port">
            {todos.map((todolist: any) => {
              return <TodoList todolist={todolist} key={todolist.id} dispatch={dispatch} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default frontdesk;
