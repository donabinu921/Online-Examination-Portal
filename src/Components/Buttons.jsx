import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Buttons = ({ name, to }) => (
    <Link to={to}>
    <Button type="primary" >{name}</Button>
    </Link>
);

export default Buttons;