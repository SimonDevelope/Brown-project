import React, { ReactElement } from 'react';
import { TrashBag } from '../../../svg/svg';
import { Todo, Action } from '../frontdesk';
import './todolist.scss';

interface itemProps {
  todolist: Todo;
  dispatch: React.Dispatch<Action>;
}

const todolist = ({ todolist, dispatch }: itemProps): ReactElement => {
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
