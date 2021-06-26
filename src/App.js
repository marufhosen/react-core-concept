import logo from './logo.svg';
import './App.css';

function App() {

  //const actors = ['Berline', 'Professor', 'Denver', 'Tokyo'];

  return (
    <div className="App">
      <header className="App-header">
        <p>Display Content</p>
        <Person name='Cristiano Ronldo' job="Footballer of Juventus FC"></Person>
        <Person name='Leonel Messi' job="Footballer of FCB"></Person>
        <Person name='Naymer Junior' job="Footballer of PSG"></Person>
        <Person name='Sergio Ramos' job="Footballer of ..."></Person>
      </header>
    </div>
  );
}

// Dynamic Data pass By 'props'
function Person(props){
  return(
    <div style={{border: '2px solid purple', width: '60%', margin: '10px', padding: '10px'}}>
      <h3>Name: {props.name}</h3>
      <p>Professon: {props.job}</p>
    </div>
  );
}


export default App;
