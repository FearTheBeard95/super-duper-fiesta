import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { Table, Tag, Space, Button, Popconfirm } from 'antd';
import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import { handleRemoveDocument } from '../redux-store/actions/documents';

class ViewDocument extends Component {
  constructor(props) {
    super(props);
    this.onConfirmDelete = this.onConfirmDelete.bind(this);
  }

  state = {
    tableLoading: false,
  };

  onConfirmDelete = (id) => {
    this.setState({
      tableLoading: true,
    });

    const { dispatch } = this.props;

    dispatch(handleRemoveDocument(id)).then(() =>
      this.setState({
        tableLoading: false,
      })
    );
  };
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => text,
      },
      {
        title: 'Issue date',
        dataIndex: 'issueDate',
        key: 'issueDate',
        responsive: ['lg'],
      },
      {
        title: 'Abstract',
        dataIndex: 'abstract',
        key: 'abstract',
        responsive: ['md'],
      },
      {
        title: 'Type',
        key: 'type',
        dataIndex: 'type',
        render: (_, { type }) => (
          <div>
            {type.map((type_1) => {
              let color =
                type_1 === 'ResearchReports'
                  ? 'geekblue'
                  : type_1 === 'OpinionPieces'
                  ? 'volcano'
                  : 'green';
              return (
                <Tag color={color} key={type_1}>
                  {type_1.toUpperCase()}
                </Tag>
              );
            })}
          </div>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size='middle'>
            <a href={record.file} target='_blank' rel='noreferrer'>
              <Button
                type='primary'
                style={{
                  color: 'green',
                  background: 'transparent',
                  borderColor: 'green',
                }}
                shape='circle'
                icon={<DownloadOutlined />}
              />
            </a>
            <Popconfirm
              title={'Are you sure you want to delete this document?'}
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
    const { data } = this.props;
    return (
      <MainLayout pages={[{ name: 'Documents' }, { name: 'View documents' }]}>
        <Table
          columns={columns}
          dataSource={data}
          loading={this.state.tableLoading}
        />
      </MainLayout>
    );
  }
}

function mapStateToProps({ documents }) {
  const data = documents.map(
    ({ id, name, type, abstract, issueDate, file }) => ({
      key: id,
      name,
      type: [type],
      abstract,
      issueDate,
      file,
    })
  );
  return {
    data,
  };
}

export default connect(mapStateToProps)(ViewDocument);
