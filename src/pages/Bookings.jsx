import { Button,Card, Form, Input, Flex, DatePicker, Space, InputNumber } from 'antd';

// const onChange = value => {
//   console.log('changed', value);
// };
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const Bookings = () => (
  <Flex style={{
                height:"100vh", display:"flex", justifyContent: "center",
                alignItems:"center", background:"#f0f2f5", backgroundColor:"aliceblue",
                
            }}>
    <Card>
        <Form 
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name" 
      name="name"
      rules={[{ required: true, message: 'Please enter your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Room No.:"
      name="roomNo"
      rules={[{ required: true, message: 'Please enter your room no.!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
        label="Check-In-Date"
    >
        <Space vertical style={{alignItems:"fl"}} >
    <DatePicker onChange={onChange} />
  </Space>
    </Form.Item>

    <Form.Item
        label="Check-Out-Date"
    >
        <Space vertical style={{alignItems:"fl"}} >
    <DatePicker onChange={onChange} />
  </Space>
    </Form.Item>

    <Form.Item
      label="No. of Guests.:"
      name="guestCount"
      rules={[{ required: true, message: 'Please enter no. of guests' }]}
    >
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />

    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Book Now
      </Button>
    </Form.Item>
  </Form>
    </Card>
  </Flex>
);
export default Bookings;