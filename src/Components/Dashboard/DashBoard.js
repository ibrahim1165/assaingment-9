import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart,bar,BarTooltip, Legend, Bar,ResponsiveContainer, PieChart, Pie, ReferenceLine, } from 'recharts';
const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
]

const DashBoard = () => {
    return (
       <div className="flex item-center gap-20 px-6 mx-4 grid gird-cols-1 md:grid-cols-2 mt-4">
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="investment" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>

     <div>
     <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="sell" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
  </BarChart>
     </div>
     <div>
     <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="revenue" fill="#8884d8" stackId="stack" />
          <Bar dataKey="investment" fill="#82ca9d" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
     </div>
       </div> 
                 
           
    );
};

export default DashBoard;