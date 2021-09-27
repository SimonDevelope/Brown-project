import React, { ReactElement } from 'react';
import { useTodosDispatch, Todo } from '../../../../stores/todosContext';
import { TrashBag } from '../../../svg/svg';
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
  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todolist.id,
    });
  };

  return (
    <div className="todolist-total-view-port-attr">
      <button className="todolist-list-area-button-wrapper" onClick={onToggle}>
        <div className={`${todolist.done ? 'done' : 'donotdone'}`}>{todolist.text}</div>
      </button>
      <button onClick={onRemove} className="todolist-delete-button-attr">
        <div className="todolist-trashbag-icon-wrapper">
          <TrashBag />
        </div>
      </button>
    </div>
  );
};

export default todolist;
