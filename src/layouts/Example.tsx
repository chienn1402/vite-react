import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

const { Header, Content, Footer, Sider } = Layout;

const menuItems: MenuProps['items'] = [
  { key: 'example-1', label: 'Example 1', icon: <AndroidOutlined /> },
  { key: 'example-2', label: 'Example 2', icon: <AppleOutlined /> },
  { key: 'example-3', label: 'Example 3', icon: <WindowsOutlined /> },
];

const breadcrumbItems: ItemType[] = [{ title: 'Home' }, { title: 'Example' }];

const ExampleLayout = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header></Header>
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={['example-1']}
            mode="inline"
            items={menuItems}
            onClick={({ key }) => navigate(key)}
          />
        </Sider>

        <Layout>
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={breadcrumbItems}
          ></Breadcrumb>
          <Content>
            <Outlet />
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ExampleLayout;
