import React from 'react';
import "../Styles/Calendars.css";
import { Badge, Calendar } from 'antd';
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
       
        {
          type: 'success',
          content: 'Chem Test.',
        },
      ];
      break;
    case 10:
      listData = [
      
        {
          type: 'success',
          content: 'Bio Test.',
        },
       
      ];
      break;
    case 15:
      listData = [
        
        {
          type: 'success',
          content: 'Retest Math.',
        },
        
      ];
      break;
    default:
  }
  return listData || [];
};
const Calendars = () => {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default Calendars;