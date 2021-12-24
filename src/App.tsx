import React from "react";
import SignUp from "./components/SignUp";
import { Layout, Menu } from 'antd';
import { Route, Routes } from "react-router-dom";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "50px", marginTop: 64 }}
      >
        <React.Fragment>
          <Routes>
            <Route path="/register" element={<SignUp />} />
          </Routes>

        </React.Fragment>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Expense Tracker @OzkanEnesKoru 2021</Footer>
    </Layout>);
}

export default App;
