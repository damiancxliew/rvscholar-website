import { Link, Outlet } from "react-router-dom";
import React from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  MenuProps,
  theme,
  Image,
  Space,
  Divider,
  AutoComplete,
} from "antd";
import myimage from "../assets/RV_logo.png";

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 80,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

const items: MenuProps["items"] = [
  { key: "intro", label: <Link to={"/"}>Home</Link> },
  { key: "experience", label: <Link to={"/experience"}>Experience</Link> },
  { key: "hostel", label: <Link to={"/hostel"}>Hostel</Link> },
  { key: "life", label: <Link to={"/life"}>Life</Link> },
];
const Home: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="demo-logo" />
        <Space>
          <Image preview={false} width={100} src={myimage} />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[]}
            disabledOverflow
            items={items}
            style={{ flex: "auto" }}
          />
        </Space>
      </Header>
      {/* <Divider style={{ background:"#ggg", padding: "0" }}></Divider> */}
      <Content style={{ padding: "0 48px", backgroundColor: "#fff"}}>
        <div
          style={{
            background: colorBgContainer,
            backgroundColor: "#fff",
            minHeight: 0,
            padding: 0,
            borderRadius: borderRadiusLG,
          }}
        >
        </div>

        <Outlet></Outlet>
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor:"#fff"}}>
        Testing ©{new Date().getFullYear()} Created by dlcx
      </Footer>
    </Layout>
  );
};

export default Home;
