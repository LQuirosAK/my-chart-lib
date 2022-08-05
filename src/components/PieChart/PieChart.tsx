import { type } from "@testing-library/user-event/dist/type";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

type chartProps = {
    data: any,
    cx: string,
    cy: string,
    fillColor: string
    dataKey: string
    nameKey: string
}

const PieChartComponent = (props: chartProps) => {
    return (
        <div>
            <h1>My Chart Lib</h1>
            <ResponsiveContainer height={400}>
                <PieChart>
                <Pie data={props.data} dataKey={props.dataKey} nameKey={props.nameKey} cx={props.cx} cy={props.cy} fill={props.fillColor} label isAnimationActive={true}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export { PieChartComponent };
export type { chartProps };
