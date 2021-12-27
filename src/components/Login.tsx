import { Form, Input, Button, Result } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from '../store/actions/userAction';
import { AppState } from '../store/reducers';
import { LoginForm } from '../types/user';
import showError from '../utils/showError';
import showSuccessMessage from '../utils/showSuccess';
// import api from '../utils/api';


function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { state } = useLocation();
    let newSignUp = state;

    const { data, loading, error } = useSelector((state: AppState) => state.user);

    const onFinish = async (values: LoginForm) => {
        dispatch(login(values));
    }
    useEffect(() => {
        error && showError(error);
    }, [error])

    useEffect(() => {
        data.username && showSuccessMessage("You have successfully login!");
    }, [data.username])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) history.push("/");
    })

    // const onFinish = async (values: any) => {
    //     try {
    //         await api.post("/users/login", values);
    //         navigate("/");
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <h2 style={{ textAlign: "center", marginBottom: 20 }}>Please Login</h2>
            {newSignUp &&
                <Result
                    status="success"
                    title="You successfully signed up!"
                    subTitle="You successfully signed up. Please login using your credantials"
                />}
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Login;