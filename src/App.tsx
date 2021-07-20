import LineChartWithContext from "./components/LineChartWithContext/LineChartWithContext";
import SimpleLineChart from "./components/SimpleLineChart/SimpleLineChart";

function App() {
  return (
    <main>
      <h1>Recharts validation</h1>
      <h3>Acceptance criterias</h3>
      <ul>
        <li>
          [x] - hover the line and the data is selected
          <br />
          (manual) need to handle onClick function looking into the function
          parameter
        </li>
        <br />
        <li>
          [x] - select the value and hide/show the line
          <br />
          (manual) need to handle the "data" to remove and add again the value
          to data array
        </li>
        <br />
        <li>[x] - tooltip with multiple informations</li>
        <li>
          [x] - bar with deviations (aquele risco que vai pra cima e pra baixo)
          <br />
          Component called ErrorBar
        </li>
        <li>[ - ] - filter by sex, and other filters</li>
        <li>[ ] - sub subjects</li>
        <li>[x] - Easy to layer multiple graphs onto the same page </li>
        <li>
          [ ] - Able to add dynamically with filter additions (we can show
          examples)
        </li>
        <li>[x] - typescript implementation</li>
        <li>[ ] - difference from Fusion Charts (currently implemented)</li>
      </ul>

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
