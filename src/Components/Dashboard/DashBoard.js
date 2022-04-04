import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart,bar,BarTooltip, Legend, Bar,ResponsiveContainer, PieChart, Pie, ReferenceLine, PolarAngleAxis, PolarRadiusAxis, Radar, PolarGrid, RadarChart, ComposedChart, Area, } from 'recharts';
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
       <div className="flex item-center gap-20 px-6 mx-4 mt-5 grid md:grid-cols-2 mt-4">
         <div>
         <h1 className="text-2xl text-bold my-2">LineChart</h1>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="investment" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
         </div>

     <div>
       <h1 className="text-2xl text-bold my-2">BarChart</h1>
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
     <h2 className="text-3xl text-bold">RadarChart</h2>
     <RadarChart outerRadius={90} width={730} height={250} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="sell" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="month" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="month" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
     </div>
     <div>
       <h1 className="text-2xl text-bold my-2">ComposedChart</h1>
     <ComposedChart width={630} height={300} data={data}>
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="investment" stroke="#ff7300" />
</ComposedChart>
     </div>
       </div> 
                 
           
    );
};

export default DashBoard;