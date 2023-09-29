import axios from 'axios';
const baseUrl = 'http://localhost:3008';
const getAllToDo = setTodo => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(`data --->`, data);
    setTodo(data);
  });
};
const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(data => {
      console.log(data);
      setText('');
      getAllToDo(setTodo);
    })
    .catch(err => console.log(err));
};
const updateTodo = (toDoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then(data => {
      setText('', data);
      setIsUpdating(false);
      getAllToDo(setTodo);
    })
    .catch(err => console.log(err));
};
const deleteToDo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then(data => {
      console.log(data);
      getAllToDo(setTodo);
    })
    .catch(err => console.log(err));
};
export { getAllToDo, addTodo, updateTodo, deleteToDo };
