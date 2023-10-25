import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

function App() {
  const widget1 = { heading: "Widget1", data: "Data1", type:"sm" };
  const widget2 = { heading: "Widget2", data: "Data2" };
  const widget3 = { heading: "Widget3", data: "Data3" };
  const widget4 = { heading: "Widget4", data: "Data4" };
  return (
    <div className="App">
      <Banner />
      <div className="dashboard">
        <Exhibit widget={widget1} />
        <Exhibit widget={widget2} />
        <Exhibit widget={widget3} />
        <Exhibit widget={widget4} />
      </div>
    </div>
  );
}

export default App;
