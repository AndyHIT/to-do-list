import './App.css';
import NewToDo from './components/newToDo';
import ToDoList from './components/toDoList';

const App = (props) => {
  // const { items } = props;
  const items = [];
  return (
    <div className="App">
      <header className="App-header">
        TO DO LIST
      </header>
      <div className="App-content">
        <NewToDo />
        <ToDoList items={items} />
      </div>
    </div>
  );
}

export default App;
