import LineChartWithContext from "./components/LineChartWithContext/LineChartWithContext";
import SimpleLineChart from "./components/SimpleLineChart/SimpleLineChart";

function App() {
  return (
    <main>
      <h1>Recharts validation</h1>

      <hr></hr>
      <h2>Simple line chart with custom tooltip</h2>
      <SimpleLineChart />

      <hr></hr>
      <h2>Chart with context</h2>
      <LineChartWithContext />
    </main>
  );
}

export default App;
