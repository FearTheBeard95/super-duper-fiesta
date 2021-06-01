import { Layout, Menu, Breadcrumb } from 'antd';
import AboutCard from './aboutCard'
import Slider from './slider'
import Featured from "./featured";
import { Space } from 'antd';

const { Header, Content, Footer } = Layout;

function Design() {
  return (
    
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">HOME</Menu.Item>
            <Menu.Item key="2">RESEARCH REPORTS</Menu.Item>
            <Menu.Item key="4">OPINION PIECES</Menu.Item>
            <Menu.Item key="5">ARTICLES AND WORKSHOP PAPERS</Menu.Item>
            <Menu.Item key="6">PHOTOGRAPHS</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Space direction='vertical'>
            <Slider />
            <AboutCard />
            <Featured />
            </Space>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Developed by Carlos Sibalatani 💡 </Footer>
      </Layout>
      )
}

export default Design