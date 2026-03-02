import "./App.css";
import MilkTea from "./components/01.Pure-Component/MilkTea";
import TeaSet from "./components/02.Not-Pure-Component/TeaSet";

const App = () => {
  return (
    <div>
      <TeaSet />
    </div>
  );
};

export default App;
