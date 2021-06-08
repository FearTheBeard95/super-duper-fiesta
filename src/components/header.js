import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const MyHeader = (props) => {
  return (
    <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={props.location}>
        <Menu.Item key="/"><Link to='/'>HOME</Link></Menu.Item>
        <Menu.Item key="/researchreports"><Link to='/researchreports'>RESEARCH REPORTS</Link></Menu.Item>
        <Menu.Item key="/opinionpieces"><Link to='/opinionpieces'>OPINION PIECES</Link></Menu.Item>
        <Menu.Item key="/articlesworkshops"><Link to='/articlesworkshops'>ARTICLES AND WORKSHOP PAPERS</Link></Menu.Item>
        <Menu.Item key="/photographs"><Link to='/photographs'>PHOTOGRAPHS</Link></Menu.Item>
    </Menu>
    </Header>
  )
}

export default MyHeader;