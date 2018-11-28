import React, { Component } from 'react';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class DashboardLayout extends Component {
    render() {
        return (
          <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
        );
    }
}

export default DashboardLayout;
