import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Radio,
  Row,
  Space,
  Table,
  message,
} from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { expendSeivece, incomeSeivece } from './service';

const serviceMeun = {
  income: incomeSeivece,
  expend: expendSeivece,
};

const radioOptions = [
  { label: '收入', value: 'income' },
  { label: '支出', value: 'expend' },
];

const User = () => {
  const [currentType, setCurrentType] = useState<'income' | 'expend'>('income');
  const [cashList, setCashList] = useState([]);
  const [ModalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>();
  const [action, setAction] = useState('');
  const [form] = Form.useForm();
  const currentService = useMemo(() => serviceMeun[currentType], [currentType]);

  const getCashList = async () => {
    const result: any = currentService.getCashList();
    setCashList(result.data);
  };

  useEffect(() => {
    getCashList();
  }, [currentType]);

  const handleAddUser = async () => {
    const result = await currentService.addCash(form.getFieldsValue());
    if (result) {
      message.success('新增成功');
      setModalOpen(false);
      getCashList();
    } else {
      message.error('新增失败');
    }
  };

  const handleDelete = async (item: any) => {
    try {
      const result = await currentService.deleteCash({ id: item.id });
      if (result === true) {
        message.success('删除成功');
        getCashList();
      } else {
        message.error('删除失败');
      }
    } catch (e) {
      message.error('删除失败');
    }
  };

  const handleModify = async () => {
    const id = currentUser.id;

    const result = await currentService.updateCash({
      id,
      ...form.getFieldsValue(),
    });

    if (result === true) {
      message.success('修改成功');
      setModalOpen(false);
      getCashList();
    } else {
      message.error('修改失败');
    }
  };

  const columns = [
    { title: '用户名', dataIndex: 'username', key: 'username' },
    { title: '金额', dataIndex: 'money', key: 'money' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    {
      title: '操作',
      dataIndex: 'actions',
      key: 'actions',
      render: (record: any) => {
        return (
          <Space>
            <Popconfirm
              title="确定删除该用户？"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                handleDelete({ id: record.id });
              }}
            >
              <Button danger>删除</Button>
            </Popconfirm>
            <Button
              type="primary"
              onClick={async () => {
                const result = await currentService.getCash({ id: record.id });
                setCurrentUser(result);
                form.setFieldsValue(result);
                setAction('modify');
                setModalOpen(true);
              }}
            >
              修改
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <PageContainer ghost>
        <Row style={{ marginBottom: 16 }}>
          <Col>
            <Radio.Group
              options={radioOptions}
              onChange={(e: any) => {
                setCurrentType(e.target.value);
              }}
              value={currentType}
              optionType="button"
            />
          </Col>
        </Row>

        <Table dataSource={cashList} columns={columns} bordered />
        <Modal
          title="添加用户"
          open={ModalOpen}
          onCancel={() => {
            setModalOpen(false);
          }}
          onOk={() => {
            if (action === 'add') {
              handleAddUser();
            } else if (action === 'modify') {
              handleModify();
            }
          }}
        >
          <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="年龄" name="age">
              <Input />
            </Form.Item>
            <Form.Item label="手机号码" name="phone">
              <Input />
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
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="confirm_password"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: '请再次输入密码' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次密码输入不一致');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      </PageContainer>
    </>
  );
};

export default User;
