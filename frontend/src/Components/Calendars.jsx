import React from 'react';
import { Badge, Calendar } from 'antd';
import "../Styles/Calendars.css";

// Define an array containing dates and their corresponding content
const dateContentArray = [
  { date: '2024-05-08', content: 'Biology' },
  { date: '2024-05-10', content: 'Chemistry' },
  // Add more dates and their corresponding content as needed
];

// Modify getListData function to retrieve badge information from the array
const getListData = (value) => {
  const dateString = value.format('YYYY-MM-DD');
  const dateInfo = dateContentArray.find(item => item.date === dateString);
  return dateInfo ? [{ type: 'success', content: dateInfo.content }] : [];
};

const App = () => {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default App;