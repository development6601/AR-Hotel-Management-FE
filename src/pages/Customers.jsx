const Customers = () =>{
    return(
        <div>
            <h1>Customer</h1>
            <p>Customer Management Page</p>
            
        </div>
    )
};

export default Customers;

// import { useEffect, useState } from "react";
// import{Button, Form, Input, Modal, Space, Table, message} from "antd";
// import MainLayout from "../layouts/MainLayout";
// import api from "../services/api";

// const Customers = () =>{

//     const [Customers, setCustomers] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [loading, setLoading] =useState(false);
//     const [form] = Form.useForm();

//     const fetchCustomers = async() =>{
//         try{
//             const response = await api.get("./customers");
//             setCustomers(response.data);

//         }catch(error){
//             console.log(error);
//         }
//     };

//     const handleAddCustomer = async (values) => {
//         try{
//             setLoading(true);
//             await api.post("/customers", values);
//             message.success("Customer added successfully");
//             form.resetFields();
//             setOpen(false);
//             fetchCustomers();

//         }catch(error){
//             message.error("Something went wrong");
//         }finally{
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) =>{
//         try{
//             await api.delete('/customers/$id');
//             message.success("Customer deleted successfully");
//             fetchCustomers();
//         }catch(error){
//             console.log(error);
//         }
//     };

//     useEffect(() =>{
//         fetchCustomers();
//     },[]);

//     const columns = [
//         {
//             title:"Name",
//             dataIndex:"fullName"
//         },
//         {
//             title:"Email",
//             dataIndex:"email"
//         },
//         {
//             title:"Phone",
//             dataIndex:"phone"
//         },
//         {
//             title:"Status",
//             dataIndex:"status"
//         },
//         {
//             title:"Actions",
//             render: (_,record) =>(
//                 <Space>
//                     <Button danger onClick={() => handleDelete(record._id)}>Delete</Button>
//                 </Space>
//             ),
//         },
//     ];

//     return(
//         <MainLayout>
//             <div style={{
//                 display:"flex", justifyContent:"space-between", marginBottom:"20px"
//             }}>
//                 <h1>Customers</h1>
//                 <Button type="primary" onClick={() => setOpen(true)}>
//                     Add Customer</Button>
//             </div>
//            <Table columns={columns} dataSource={Customers} />

//            <Modal open={open} title="Add Customer" footer={null} onCancel = {() => setOpen(false)}>

//                 <Form layout="vertical" form={form} onFinish={handleAddCustomer}>

//                     <Form.Item label="FullName" name="fullName" rules={[
//                         {
//                             required:true,
//                         },
//                     ]}><Input/>
//                     </Form.Item>
//                     <Form.Item label="Email" name="email" rules={[
//                         {
//                             required:true,
//                         }
//                     ]} ><Input/>
//                     </Form.Item>
//                     <Form.Item label="Phone" name="phone" rules={[
//                         {
//                             required:true,
//                         }
//                     ]} ></Form.Item>

//                     <Button type="primary" htmlType="submit" loading={loading}block >
//                         Add Customer
//                     </Button>

//                 </Form>
//            </Modal>

//         </MainLayout>
//     );
// };

// export default Customers;