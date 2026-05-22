import { Button, Card, Input } from "antd";

const Login = () =>{
    return(
        <div
            style={{
                height:"100vh", display:"flex", justifyContent: "center",
                alignItems:"center", background:"#f0f2f5"
            }}>
            <Card title="Login" style={{width:350}}>
                {/* <Input placeholder="Name" style={{marginBottom:"15px"}}/> */}
                <Input placeholder="Email" style={{marginBottom:"15px"}} />
                <Input.Password placeholder="Password" style={{marginBottom:"15px"}}/>
                {/* <Input placeholder="Role" style={{marginBottom:"15px"}}/> */}
                <Button type="primary" block>
                    Login
                </Button>
            </Card>
            
        </div>
    );
}

export default Login;