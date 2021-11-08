import './App.css';
import Searchbar from './Components/Searchbar';
import Todolist from './Components/Todolist';

function App() {
  return (
    <>
      {/* search container */}
      <div className="md:w-1/2 mx-auto mt-20 text-center">
        <h1 className="font-medium text-3xl">React Todos</h1>
        <Searchbar />

        <Todolist />
        </div>
    </>
  );
}

export default App;
