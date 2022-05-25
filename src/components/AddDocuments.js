import { Component } from 'react';
import { Form, Input, Button, Select, DatePicker, Upload } from 'antd';
import MainLayout from './MainLayout';
import { InboxOutlined } from '@ant-design/icons';

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
    value: 'ArticleWorkshop',
    placeholder: 'Article and workshop papers',
  },
];

class AddDocuments extends Component {
  render() {
    return (
      <MainLayout pages={[{ name: 'Documents' }, { name: 'Add document' }]}>
        <Form {...layout} labelAlign='left'>
          <Form.Item label='Name' name={'Name'} rules={[{ required: true }]}>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item
            label='Abstract'
            name={'Abstract'}
            rules={[{ required: true }]}
          >
            <Input.TextArea placeholder='Abstract' />
          </Form.Item>
          <Form.Item
            label='Document Type'
            name={'Type'}
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
            name={'IssueDate'}
            rules={[{ required: true }]}
          >
            <DatePicker placeholder='Issued date' />
          </Form.Item>
          <Form.Item
            label='Document file'
            name={'file'}
            rules={[{ required: true }]}
          >
            <Upload.Dragger>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </MainLayout>
    );
  }
}

export default AddDocuments;
