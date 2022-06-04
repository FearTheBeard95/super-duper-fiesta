import React, { useState } from 'react';
import MainLayout from './MainLayout';
import {
  Space,
  Tag,
  Button,
  Popconfirm,
  Table,
  Modal,
  Form,
  Input,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 10 },
};
const AddGallery = ({ data, dispatch }) => {
  const [openModal, setOpen] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => text,
    },
    {
      title: 'Photos',
      dataIndex: 'photos',
      key: 'photos',
      responsive: ['lg'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            type='primary'
            style={{
              color: 'green',
              background: 'transparent',
              borderColor: 'green',
            }}
            shape='circle'
            icon={<EditOutlined />}
          />
          <Popconfirm
            title={'Are you sure you want to delete this gallery?'}
            onConfirm={() => this.onConfirmDelete(record.key)}
            onCancel={null}
            okText='confirm'
            cancelText='cancel'
          >
            <Button
              type='primary'
              style={{
                color: 'red',
                background: 'transparent',
                borderColor: 'red',
              }}
              shape='circle'
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const onClose = () => {
    return setOpen(false);
  };

  const handleOnFinish = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <MainLayout pages={[{ name: 'Galleries' }]}>
      <Table columns={columns} dataSource={data} loading={loadingTable} />
      <Button
        type='primary'
        onClick={() => setOpen(true)}
        style={{ marginTop: '10px' }}
        loading={loadingButton}
      >
        Add
      </Button>
      <Modal
        title='Add gallery'
        visible={openModal}
        onCancel={onClose}
        okButtonProps={{ form: 'gallery', key: 'submit', htmlType: 'submit' }}
      >
        <Form form={form} onFinish={handleOnFinish} id='gallery'>
          <Form.Item label='Name' id='name' name={'name'}>
            <Input placeholder='Name' />
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
};

const mapStateToProps = ({ galleries }) => {
  const data = galleries.map(({ id, name }) => ({
    key: id,
    name,
    photos: '',
  }));

  return {
    data,
  };
};

export default connect(mapStateToProps)(AddGallery);
