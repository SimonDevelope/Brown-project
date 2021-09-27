import React, { ReactElement, useState } from 'react';
import Time from '../../utils/clock/time';
import { useTodosState, useTodosDispatch } from '../../../stores/todosContext';
import './frontdesk.scss';

const frontdesk = (): ReactElement => {
  const todos = useTodosState();
  const dispatch = useTodosDispatch();
  const [value, setValue] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  console.log(todos);

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
            {todos.state.map((todo: any) => {
              return (
                <div key={todo.id} className="frontdesk-list-block">
                  {todo.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default frontdesk;
