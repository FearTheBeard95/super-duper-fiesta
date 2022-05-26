import { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Upload } from 'antd';
import MainLayout from './MainLayout';
import { InboxOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { handleAddDocument } from '../redux-store/actions/documents';
import { dateToString } from '../utils/helpers';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 10 },
};

const DocumentTypes = [
  {
    value: 'ResearchReports',
    placeholder: 'Research Reports',
  },
  {
    value: 'OpinionPieces',
    placeholder: 'Opinion Pieces',
  },
  {
    value: 'ArticlesWorkshop',
    placeholder: 'Article and workshop papers',
  },
];

const AddDocument = (props) => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [form] = Form.useForm();

  const handleOnFinish = (values) => {
    console.log(values);
    setLoadingButton(true);
    const { dispatch } = props;
    let { name, abstract, issueDate, type, file } = values;

    issueDate = dateToString(issueDate);
    file = file[0].originFileObj;

    const document = {
      name,
      abstract,
      issueDate,
      type,
      file,
    };

    dispatch(handleAddDocument(document)).then(() => {
      setLoadingButton(false);

      return form.resetFields();
    });
  };

  const normFile = (e) => {
    return e && e.fileList;
  };
  return (
    <MainLayout pages={[{ name: 'Documents' }, { name: 'Add document' }]}>
      <Form form={form} {...layout} labelAlign='left' onFinish={handleOnFinish}>
        <Form.Item label='name' name={'name'} rules={[{ required: true }]}>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item
          label='abstract'
          name={'abstract'}
          rules={[{ required: true }]}
        >
          <Input.TextArea placeholder='Abstract' />
        </Form.Item>
        <Form.Item
          label='Document Type'
          name={'type'}
          rules={[{ required: true }]}
        >
          <Select>
            {DocumentTypes.map((type) => (
              <Option key={type.value} value={type.value}>
                {type.placeholder}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='Date issued'
          name={'issueDate'}
          rules={[{ required: true }]}
        >
          <DatePicker placeholder='Issued date' />
        </Form.Item>
        <Form.Item
          label='Document file'
          name={'file'}
          rules={[{ required: true }]}
          valuePropName='fileList'
          getValueFromEvent={normFile}
        >
          <Upload.Dragger beforeUpload={() => false} maxCount={1}>
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>
              Click or drag file to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit' loading={loadingButton}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </MainLayout>
  );
};

export default connect()(AddDocument);
