import { Timeline } from 'antd';

const Activities = ({ activities }) => (
  <Timeline>
    {activities.map((activity, index) => (
      <Timeline.Item key={index}>{`${activity.description}`}</Timeline.Item>
    ))}
  </Timeline>
);

export default Activities;