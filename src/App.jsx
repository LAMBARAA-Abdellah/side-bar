import Sider from 'antd/es/layout/Sider';
import { Button, Layout, theme } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ToggleThemeButton from './components/ToggleThemeButton';
import { Header } from 'antd/es/layout/layout';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setcollapsed] = useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'}
        className='sidebar'>
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            className='toggle-icon'
            onClick={() => setcollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}>
          </Button>
        </Header>
      </Layout>
    </Layout>
  )
}

export default App
