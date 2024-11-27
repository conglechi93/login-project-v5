import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Modal, Row, Space, Table } from "antd";
import React from "react";
import "./user.css";
import UserDelete from "./UserDelete";
import UserViewDetail from "./UserViewDetail";
import UserEdit from "./UserEdit";

const Users = () => {
  const [dataSource, setDataSource] = React.useState([
    {
      key: "1",
      id: 1,
      name: "John",
      phone: "123456789",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
  ]);
  const [editingRecord, setEditingRecord] = React.useState(null);

  const [modalProps, setModalProps] = React.useState({});

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Flex gap={8}>
          <Button
            onClick={() => {
              handleViewDetailUser(record);
            }}
          >
            <EyeOutlined />
          </Button>{" "}
          <Button
            onClick={() => {
              handleEditUser(record);
            }}
          >
            <EditOutlined />
          </Button>{" "}
          <Button
            onClick={() => {
              handleDeleteUser(record);
            }}
          >
            <DeleteOutlined />
          </Button>{" "}
        </Flex>
      ),
    },
  ];

  const handleAddUser = () => {
    setModalProps({
      open: true,
      title: "Add User",
      onCancel: () => {
        setModalProps({
          open: false,
        });
      },
      children: <div> hello </div>,
    });
  };

  const handleEditUser = (record) => {
    setEditingRecord(record); // Cập nhật giá trị record đang chỉnh sửa
    setModalProps({
      open: true,
      title: "Edit User",
      okText: "Save",
      onCancel: () =>
        setModalProps({
          open: false,
        }),
      onOk: () => {
        const updatedData = dataSource.map((user) =>
          user.key === record.key ? { ...user, ...editingRecord } : user
        );
        setDataSource(updatedData);
        setModalProps({ open: false });
      },
      children: (
        <UserEdit
          record={record}
          onChange={(newRecord) => setEditingRecord(newRecord)}
        />
      ),
    });
  };
  const handleDeleteUser = (record) => {
    setModalProps({
      open: true,
      title: "Delete User",
      onCancel: () => {
        setModalProps({
          open: false,
        });
      },
      children: <UserDelete record={record} />,
    });
  };
  const handleViewDetailUser = (record) => {
    setModalProps({
      open: true,
      title: "View Detail User",
      okText: "Save",
      onCancel: () =>
        setModalProps({
          open: false,
        }),
      onOk: () => {
        setModalProps({ open: false });
      },
      children: <UserViewDetail record={record} />,
    });
  };

  return (
    <Row className="user-wrapper" gutter={[16, 16]}>
      <Modal {...modalProps}></Modal>
      <Col xs={24}>
        <Space>
          <Button type="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Space>
      </Col>
      <Col xs={24}>
        <Table dataSource={dataSource} columns={columns} />
      </Col>
    </Row>
  );
};
export default Users;
