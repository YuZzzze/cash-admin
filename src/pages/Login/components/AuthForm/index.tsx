import { history, useModel } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Button, Card, Form, Input, Tabs, message } from 'antd';
import React from 'react';
import { login } from '../../service';

const AuthForm: React.FC = () => {
  const [form] = Form.useForm();
  const { isLogin, setIsLogin } = useModel('login');

  const handleLogin = () => {
    message.success('登录成功！');
    setIsLogin(true);
    console.log(isLogin);

    history.replace('/');
  };

  const { loading: loginLoading, run: runLogin } = useRequest(login, {
    manual: true,
    onSuccess(data: any) {
      if (data.code === 0) {
        handleLogin();
      }
    },
    onError() {
      handleLogin();
    },
  });

  return (
    <Card
      title={
        <Tabs
          defaultActiveKey="login"
          centered
          items={[
            {
              key: 'login',
              label: <div className="text-xl">{'登录'}</div>,
            },
          ]}
        />
      }
      bordered={false}
      headStyle={{ border: 'none', padding: 0, paddingTop: 30 }}
      bodyStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Form form={form} onFinish={runLogin}>
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input placeholder={'用户名'} />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input.Password placeholder={'密码'} />
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            htmlType="submit"
            loading={loginLoading}
            style={{ width: '100%' }}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AuthForm;
