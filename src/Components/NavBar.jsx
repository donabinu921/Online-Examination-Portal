import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  HomeFilled,
  CalendarFilled,
  CopyFilled,
  MailFilled,
} from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    { key: '1', label: 'Home', icon:<HomeFilled/>, path: '/home' },
    { key: '2', label: 'Assessment', icon:<CopyFilled/>, path: '/assessment' },
    { key: '3', label: 'Calendar', icon:<CalendarFilled/>, path: '/calendar' },
    { key: '4', label: 'Request Retest', icon:<MailFilled/>, path: '/retest-request' },
  ];

  const NavBar = () => {
    const location = useLocation();
    
    return (
      <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
        {items.map(item => (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }

export default NavBar;
