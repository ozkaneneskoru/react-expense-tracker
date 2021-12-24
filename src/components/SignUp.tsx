import { Form, Input, Button,message,Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';


function SignUp() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
   const history = useNavigate();
  const onFinish = async (values: any) => {
    try {
      await api.post("/users/register", values);
       history('/login');
    }
    catch (error) {
      message.error((error as any).response.data.errorMessage);
    }
  };
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <h2 style={{ textAlign: "center", marginBottom: 20}}>Register for an account</h2>
      <Form.Item name="username" label="UserName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!', min: 6 }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="fullname" label="FullName">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
export default SignUp;
