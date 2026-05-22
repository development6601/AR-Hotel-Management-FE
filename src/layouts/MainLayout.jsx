import { Layout, Menu } from "antd";
import {HomeOutlined ,AlignLeftOutlined, UserOutlined, BookOutlined, DashboardOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";
import { Children } from "react";

const{Header, Sider, Content } = Layout; 

const MainLayout = ({Children}) =>{
    return(
        <Layout style={{minHeight:"500vh" }}>
            <Sider>
                <div style={{color:"white", padding:"20px", fontSize:"20px" }} ><h2>Menu</h2></div>
                <Menu theme="dark" mode="inline"
                    items={[{
                        key:"1",
                        icon:<HomeOutlined />,
                        label:<Link to="/Home" > <h3>Home</h3> </Link>,
                    },
                    {
                        key:"2",
                        icon:<AlignLeftOutlined />,
                        label:<Link to="/About"> <h3> About</h3></Link>,
                    },
                    {
                        key:"3",
                        icon:<DashboardOutlined/>,
                        label:<Link to="/Dashboard"> <h3> Dashboard</h3></Link>,

                    },
                    {
                        key:"4",
                        icon:<BookOutlined/>,
                        label:<Link to="/Bookings"> <h3> Bookings</h3></Link>,
                    },
                    {
                        key:"5",
                        icon:<UsergroupAddOutlined />,
                        label:<Link to="/Customers"> <h3> Customers</h3></Link>,
                    },
                ]}
                />
            </Sider>
            <Layout>
                <Header style={{background:"white" }}>
                    <div>
                        <h1 style={{fontFamily: 'Montserrat,sans-serif'}} >
                            Hotel
                        </h1>
                    </div>
                </Header>
                <Content style={{padding:"20px", backgroundImage:"../images/HE_1.jpg"  }} > 
                
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;