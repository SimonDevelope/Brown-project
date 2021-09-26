import React, { ReactElement, useState, useRef, useReducer, useCallback } from 'react';
import Time from '../../utils/clock/time';
import './frontdesk.scss';

const frontdesk = (): ReactElement => {
  const nextId = useRef(3);
  const [value, setValue] = useState('');
  type Todo = {
    id: number;
    text: string;
    done: boolean;
  };

  type TodosState = Todo[];

  type Action = { type: 'CREATE'; text: string } | { type: 'TOGGLE'; id: number } | { type: 'REMOVE'; id: number };

  function todoReducer(state: TodosState, action: Action): TodosState {
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
        return state;
    }
  }

  const initialTodos: Todo[] = [
    {
      id: 1,
      text: 'JavaScript 공부하기',
      done: false,
    },
    {
      id: 2,
      text: 'C언어 공부하기',
      done: false,
    },
  ];

  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => setValue(e.target.value), []);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    nextId.current += 1;
    setValue('');
  }, []);

  console.log(state);

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
            <span className="frontdesk-simple-todolist-subject">오늘 계획은 어떻게 되시나요?</span>
          </div>
          <form className="front-desk-insert-form" onSubmit={onSubmit}>
            <input className="frontdesk-simple-todolist-input-area" value={value} onChange={onChange} />
          </form>
          <div className="frontdesk-simple-todolist-view-port">
            {state.map((states) => {
              <div key={states.id}>{states.text}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default frontdesk;
