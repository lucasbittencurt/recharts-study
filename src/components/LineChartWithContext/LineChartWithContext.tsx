import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomLegend from "../CustomLegend/CustomLegend";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

const data = [
  {
    name: "-9",
    "gr-1-m": 2.4,
    "gr-1-f": { value: 2.2, sex: "F" },
    "gr-2-m": 2.4,
  },
  {
    name: "-2",
    "gr-1-m": 2.4,
    "gr-1-f": { value: 2.2, sex: "F" },
    "gr-2-m": 2.3,
  },
  {
    name: "7",
    "gr-1-m": 2.6,
    "gr-1-f": { value: 2.4, sex: "F" },
    "gr-2-m": 2.35,
  },
  {
    name: "14",
    "gr-1-m": 2.7,
    "gr-1-f": { value: 2.5, sex: "F" },
    "gr-2-m": 2.5,
  },
  {
    name: "28",
    "gr-1-m": 2.6,
    "gr-1-f": { value: 2.6, sex: "F" },
    "gr-2-m": 2.62,
  },
  {
    name: "35",
    "gr-1-f": { value: 2.5, sex: "F" },
    "gr-2-m": 2.76,
  },
  {
    name: "49",
    "gr-1-f": { value: 2.8, sex: "F" },
    "gr-2-m": 2.48,
  },
];

const LineChartWithContext = () => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          onClick={(e: any) => console.log(e)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            content={<CustomLegend />}
          />
          <Line
            type="monotone"
            dataKey={"gr-1-m"}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey={"gr-1-f.value"}
            stroke="#82ca9d"
            strokeDasharray={"5 5"}
          />
          <Line type="monotone" dataKey={"gr-2-m"} stroke="#E26D5C" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartWithContext;
