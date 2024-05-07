import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  HomeFilled,
  CalendarFilled,
  CopyFilled,
  MailFilled,
  LogoutOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
const items1 = [
    { key: '1', label: 'Home', icon:<HomeFilled/>, path: '/home' },
    { key: '2', label: 'Take Test', icon:<CopyFilled/>, path: '/assessment' },
    { key: '3', label: 'Calendar', icon:<CalendarFilled/>, path: '/calendar' },
    { key: '4', label: 'Request Retest', icon:<MailFilled/>, path: '/retest-request' },
    { key: '5', label: 'Logout', icon:<LogoutOutlined/>, path: '/'},
  ];
const items2 = [
    { key: '1', label: 'Home', icon:<HomeFilled/>, path: '/teacher-home' },
    { key: '2', label: 'Calendar', icon:<CalendarFilled/>, path: '/teacher-calendar' },
    { key: '3', label: 'Tests', icon:<CopyFilled/>, path: '/teacher-tests' },
    { key: '4', label: 'Retests', icon:<MailFilled/>, path: '/teacher-retests' },
    { key: '5', label: 'Logout', icon:<LogoutOutlined/>, path: '/'},
  ];

  const NavBar = ({num}) => {
    const location = useLocation();
    
    const items = num === 2 ? items2 : items1;

    return (
      <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline" >
        {items.map(item => (
          <Menu.Item icon={item.icon} key={item.path}>
            <Link to={item.path}>
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }

export default NavBar;
