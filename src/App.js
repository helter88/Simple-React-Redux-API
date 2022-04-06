import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { getData } from './state/fetchReducer';

function App() {
  const list = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getData()), [dispatch]);
  let showList = [];
  showList = list.map((item) => (
    <li key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.email}</p>
    </li>
  ));
  return (
    <div className="App">
      <h1>List from API</h1>
      <ul>{showList.length ? showList : <p>Nothing to display</p>}</ul>
    </div>
  );
}

export default App;
