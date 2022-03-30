import Header from "./components/\bheader";
import Temp from "./components/Temp";

function App() {
  return (
    <div>
      <Header />
      <a id="temp" href="/#">
        <Temp />
      </a>
    </div>
  );
}

export default App;
