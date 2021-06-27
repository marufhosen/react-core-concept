import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  //const actors = ['Berline', 'Professor', 'Denver', 'Tokyo'];
  const players = [
  {
    name: 'Cristiano Ronaldo',
    club: 'Juventus FC',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'David Alaba',
    club: 'Real Madrid FC',
    description: 'It has survived not only five centuries, but also the leap into electronic typesetting,',
  },
  {
    name: 'Cristian Errickson',
    club: 'Inter Milan FC',
    description: 'Lorem Ipsum as their default model text, and a search for will uncover many web sites still.',
  }
]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Display Content from Object</h1>
        {
          players.map(pl => <Players details={pl}></Players>)
        }
        <h1>Counter</h1>
        <Counter></Counter>
        <h1>Dynamic Users</h1>
        <Users></Users>
      </header>
    </div>
  );
}

// Dynamic Data pass By 'props'

function Players(props){
  const displayingStyle = {
    border: '2px solid pink',
    margin: '10px',
    padding: '10px',
    width: '40%',
    borderRadius: '5px',
  }

  const{name, club, description} = props.details;
  return(
    <div style={displayingStyle}>
      <h2>{name}</h2>
      <p>{club}</p>
      <p>{description}</p>
      <button>More Info</button>
    </div>
  );
}

// Click event with Counter Exmple

function Counter(){
  const counterStyle = {
    border: '2px solid pink',
    margin: '10px',
    padding: '10px',
    width: '40%',
    borderRadius: '5px',
  }

const [count, setCount] = useState(0);

const handleDecrese = () => setCount(count - 1);
const handleIncrese = () => setCount(count + 1);

  return(
    <div style={counterStyle}>
      <h2>Count: {count} </h2>
      <button style={{margin: '10px', padding: '10px'}} onClick={handleDecrese}>Decrease -</button>
      <button style={{margin: '10px', padding: '10px'}} onClick={handleIncrese}>Increse +</button>
    </div>
  );
}

// Load data from Api

function Users(){
  const userStyle = {
    border: '2px solid pink',
    margin: '10px',
    padding: '10px',
    width: '40%',
    borderRadius: '5px',
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    //console.log(data);
  }, []);

  return(
    <div style={userStyle}>
      <h3>Users: {users.length}</h3>
      {
        users.map(user => <p>{user.name}</p>)
      }
    </div>
  );
}

export default App;