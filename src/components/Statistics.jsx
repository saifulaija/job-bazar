import React from 'react';


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name : 'Assignment-01',
            marks : 60
        },
        {
            name : 'Assignment-02',
            marks : 60
        },
        {
            name : 'Assignment-03',
            marks : 58
        },
        {
            name : 'Assignment-04',
            marks : 60
        },
        {
            name : 'Assignment-05',
            marks : 59
        },
        {
            name : 'Assignment-06',
            marks : 60
        },
        {
            name : 'Assignment-07',
            marks : 50
        },
        {
            name : 'Assignment-08',
            marks : 60
        }
    ]



   


    return (
        <div className='container mx-auto my-20' >
            <ResponsiveContainer width="100%" aspect={(3)}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;