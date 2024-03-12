import './App.css';
import Counter from './Counter';
import Users from './Users';

function App() {
  return (
    <>
      <h3>React Core Concepts</h3>
      <Person name="Nayeem" age="27" work="student"></Person>
      <Counter></Counter>
      <div style={{ display: 'grid', gridColumn: '4' }}>
        <Users></Users>
      </div>
    </>
  );
}

function Person({ name, age }) {
  const styling = {
    border: '2px solid red',
    borderRadius: '25px',
    margin: '10px',
  };
  return (
    <div style={styling}>
      <h1>
        Name: {name} Age: {age}
      </h1>
      <button>Click</button>
    </div>
  );
}
export default App;
