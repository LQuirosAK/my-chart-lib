import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import './App.css';
import { chartProps } from './components';
import PieChartComponent from './components/PieChart';

function App() {

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];

  const props: chartProps = {
    data: data01,
    fillColor: "#c14512",
    cx: '50%',
    cy: '50%',
    dataKey: 'value',
    nameKey: 'name'

  }

  return (
    <div>
      <PieChartComponent {...props}></PieChartComponent>
    </div>
  );
}

export default App;
