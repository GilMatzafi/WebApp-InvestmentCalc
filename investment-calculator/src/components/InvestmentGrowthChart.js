import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InvestmentGrowthChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#FFFFFF" strokeDasharray="4 4" strokeOpacity={0.6} />
        
        <XAxis 
          dataKey="year" 
          label={{ 
            value: 'Year', 
            position: 'insideBottomRight', 
            offset: -5, 
            style: { fontSize: 16, fill: '#FFFFFF', fontWeight: 'bold' } 
          }}
          tick={{ fontSize: 14, fill: '#FFFFFF', fontWeight: 'bold' }}
        />
        
        <YAxis 
          label={{ 
            value: 'Amount', 
            angle: -90, 
            position: 'insideLeft', 
            style: { fontSize: 16, fill: '#FFFFFF', fontWeight: 'bold' }
          }}
          tick={{ fontSize: 14, fill: '#FFFFFF', fontWeight: 'bold' }}
          tickFormatter={(value) => new Intl.NumberFormat().format(value)}
        />
        
        <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
        <Line type="monotone" dataKey="amount" stroke="#ff6347" strokeWidth={3} dot={{ fill: '#ff6347', r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default InvestmentGrowthChart;




