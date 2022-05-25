import {
  PictureOutlined,
  FileTextOutlined,
  FileAddOutlined,
  FileSearchOutlined,
  SearchOutlined,
  PlusOutlined,
  CameraOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import logo from '../logo.svg';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Documents', '1', <FileTextOutlined />, [
    getItem('Add documents', '2', <FileAddOutlined />),
    getItem('View documents', '3', <FileSearchOutlined />),
  ]),
  getItem('Galleries', '4', <PictureOutlined />, [
    getItem('Add gallery', '5', <PlusOutlined />),
    getItem('View galleries', '6', <SearchOutlined />),
  ]),
  getItem('Photos', '7', <CameraOutlined />, [
    getItem('Upload photos', '8', <PlusOutlined />),
    getItem('View photos', '9', <SearchOutlined />),
  ]),
];

const MainLayout = ({ children, pages }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='logo'>
          <img src={logo} alt={'logo'} />
        </div>
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>App</Breadcrumb.Item>
            {pages.map((page, index) => (
              <Breadcrumb.Item key={index}>{page.name}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
