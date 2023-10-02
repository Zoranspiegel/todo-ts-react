import { useState } from 'react';
import { Todos } from './components/Todos';
import type { OnRemoveTodoType } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Levantarse',
    completed: true
  },
  {
    id: '2',
    title: 'Codear',
    completed: false
  },
  {
    id: '3',
    title: 'Dormir',
    completed: false
  }
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove: OnRemoveTodoType = ({ id }) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className='todoapp'>
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
      />
    </div>
  );
};

export default App;
