import React, { ReactElement } from 'react';
import { useTodosDispatch, Todo } from '../../../../stores/todosContext';
import './todolist.scss';

interface itemProps {
  todolist: Todo;
}

const todolist = ({ todolist }: itemProps): ReactElement => {
  const dispatch = useTodosDispatch();
  const onRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({
      type: 'REMOVE',
      id: todolist.id,
    });
  };
  return (
    <div className="todolist-total-view-port-attr">
      <div>{todolist.text}</div>
      <button onClick={onRemove}>삭제</button>
    </div>
  );
};

export default todolist;
