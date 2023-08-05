import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Deploy mode : {process.env.REACT_APP_DEPLOY_MODE}</h1>
      <h2>Fetch base url : {process.env.REACT_APP_FETCH_BASE_URL}</h2>
    </div>
  );
}

export default App;
