import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const data = [
  { day: 'Saturday', Order_Placed: 4, Order_Completed: 2 },
  { day: 'Sunday', Order_Placed: 3, Order_Completed: 1 },
  { day: 'Monday', Order_Placed: 2, Order_Completed: 1 },
  { day: 'Tuesday', Order_Placed: 3, Order_Completed: 3 },
  { day: 'Wednesday', Order_Placed: 2, Order_Completed: 2 },
  { day: 'Thursday', Order_Placed: 3, Order_Completed: 1 },
  { day: 'Friday', Order_Placed: 2, Order_Completed: 1 },
];

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-500 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold">Smart Dhopa</h2>
        <ul className="space-y-2">
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Customers</li>
          <li>Registration</li>
          <li>Support</li>
        </ul>
        <div className="mt-auto">Logout</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-red-500 text-white p-4 rounded">114 Total Orders</div>
          <div className="bg-blue-500 text-white p-4 rounded">84 Order Pending</div>
          <div className="bg-green-500 text-white p-4 rounded">30 Order Completed</div>
          <div className="bg-purple-500 text-white p-4 rounded">73987 Total Earning</div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Weekly Orders Bar Chart */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Weekly Orders</h2>
            <BarChart width={400} height={300} data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Order_Placed" fill="#8884d8" />
              <Bar dataKey="Order_Completed" fill="#82ca9d" />
            </BarChart>
          </div>

          {/* Business Report */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Business Report</h2>
            <CircularProgressbar value={70} text={`70%`} styles={buildStyles({ pathColor: '#4CAF50', textColor: '#000' })} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
