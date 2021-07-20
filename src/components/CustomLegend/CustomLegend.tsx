import { LegendProps } from "recharts";

import "./CustomLegend.styles.css";

const CustomLegend = (props: LegendProps) => {
  const { payload } = props;

  console.log(payload);

  return (
    <ul>
      {payload?.map((entry, index) => (
        <li
          style={{ borderLeft: `5px solid ${entry.color}` }}
          key={`item-${index}`}
        >
          {entry.value} - test
        </li>
      ))}
    </ul>
  );
};

export default CustomLegend;
