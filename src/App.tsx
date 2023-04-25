import "./App.css";
import EnterSize from "./components/EnterSize";
import Displayer from "./components/Displayer";
import DelayedDisplayer from "./components/DelayedDisplayer";
import Alerter from "./components/Alerter";

function App() {
  return (
    <div>
      <EnterSize />
      <Displayer />
      <DelayedDisplayer />
      <DelayedDisplayer />
      <Alerter />
    </div>
  );
}

export default App;
