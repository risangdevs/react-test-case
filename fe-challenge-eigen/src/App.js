import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./routes";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <div>
      <Navbar/>
      <Navigator/>
    </div>
  );
}

export default App;
