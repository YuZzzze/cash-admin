import { Col, Row } from 'antd';
import AuthForm from './components/AuthForm';

const Login = () => {
  return (
    <Row
      style={{
        marginTop: '10%',
        marginLeft: '20%',
      }}
    >
      <Col span={10} xxl={8} md={10} xs={20}>
        <AuthForm />
      </Col>
    </Row>
  );
};

export default Login;
