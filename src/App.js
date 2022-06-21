import { useSelector, useDispatch } from 'react-redux/es/exports';
import './App.css';

function App() {

const counter = useSelector((state) => state.counter)

const dispatch = useDispatch()
const Increment = () => {
  dispatch({type:"INC"})
}
const Decrement = () => {
  dispatch({type:"DEC"})
}

const addBy = () =>{
  dispatch({type:'ADD', payload:10 })
}

  return (
    <div className='App'>
    <h2>Counter App </h2>
    <h2>{counter}</h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
