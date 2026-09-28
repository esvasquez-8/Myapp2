import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Envios from "./components/layouts/Envios.jsx";
import Agregar from "./components/layouts/Agregar.jsx";
import Configuracion from "./components/layouts/Configuracion.jsx";
const { Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [index, setIndex] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={[index]}
              onClick={({key}) => {setIndex(key)}}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
          />
        </Sider>
        <Layout>
          <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
          >
            {index === '1' && <Envios />}
            {index === '2' && <Agregar/>}
            {index === '3' && <Configuracion />}
          </Content>
        </Layout>
      </Layout>
  );
};
export default App;