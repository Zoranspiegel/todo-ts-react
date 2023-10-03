import { type TodoProps } from '../types';

export const Todo: React.FC<TodoProps> = ({ id, title, completed, onRemoveTodo, onCompleteTodo }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        type="checkbox"
        checked={completed}
        onChange={() => {
          onCompleteTodo({ id });
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id });
        }}
      />
    </div>
  );
};
