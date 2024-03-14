import { Calendar } from 'antd';
import "../Styles/Calendars.css";

const Calendars = ({ events }) => {
  const wrapperStyle = {
    width: 500,
    border: '1px solid #d9d9d9',
    borderRadius: 4,
  };

  const cellRender = (value) => {
    const dateString = value.format('YYYY-MM-DD');
    const event = events.find(event => event.date === dateString);
  
    return (
      <div className={event ? 'event-day-content' : ''}>
      </div>
    );
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} cellRender={cellRender} />
    </div>
  );
};

export default Calendars;