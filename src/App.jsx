import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { addTodo, getAllToDo, updateTodo, deleteToDo } from './utils/HandleApi';
import { Navigate } from 'react-router-dom';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState();
  const [toDoId, setToDoId] = useState('');
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const handleReload = () => {
    window.location.reload();
  };
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };
  return (
    <div className="app">
      <div className="container">
        <h1>ToDo Add</h1>
        <div className="top">
          <input
            type="text"
            placeholder="add todos ...."
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(toDoId, text, setText, setToDo, setIsUpdating)
                : () => addTodo(text, setText, setToDo)
            }
          >
            {isUpdating ? `update` : 'add'}
          </div>
        </div>
        <div className="list">
          {toDo.map(item => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
