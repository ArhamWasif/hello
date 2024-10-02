import logo from './logo.svg';
import './App.css';
import { increment } from './action';
import { decrement } from './action';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const count =useSelector(state=>state.count)
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>Count:{count}</h1>
     <button onClick={() => dispatch(increment())} >Increment</button>
     <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
