import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
     
        <label>
          Password:
          <input type="password" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </header>
    </div>
  );
}

export default App;
