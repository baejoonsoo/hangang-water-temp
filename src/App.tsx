import Temp from "./components/Temp";
import { Header } from "./style/mainPage";

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
