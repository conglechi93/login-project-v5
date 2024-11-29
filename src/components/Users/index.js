import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Flex,
  message,
  Modal,
  Row,
  Space,
  Table,
  Input,
  Form,
} from "antd";
import React, { useEffect } from "react";
import "./user.css";
import UserDelete from "./UserDelete";
import UserViewDetail from "./UserViewDetail";
import UserEdit from "./UserEdit";
import axios from "axios";
import UserAddAndUpdate from "./UserAddAndUpdate";

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
  const [form] = Form.useForm();
  const [searchText, setSearchText] = React.useState("");
  const [editingRecord, setEditingRecord] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
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
  const fetchUsers = async (search = "") => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/users", {
        params: {
          search: search,
        },
      });
      console.log(response.data);

      const data = response.data.map((user, index) => ({
        key: index + 1,
        id: user.id,
        name: user.name,
        phone: user.phone,
        age: user.age,
        address: user.address,
      }));

      setDataSource(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    fetchUsers(searchText);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setModalProps({
      open: true,
      title: "Add User",
      onCancel: () => {
        form.resetFields();
        setModalProps({
          open: false,
        });
      },
      children: <UserAddAndUpdate form={form} record={null} />,
      onOk: async () => {
        const data = form.getFieldsValue();
        const response = await axios.post("http://localhost:8080/users", data);
        console.log("response", response);
        const status = response.status;
        if (status === 200) {
          message.success("Add successfully");
          fetchUsers();
          setSearchText("");
          setModalProps({ open: false });
        } else {
          message.error("Add failed");
        }
      },
    });
  };

  const handleEditUser = (record) => {
    setEditingRecord(record);
    setModalProps({
      open: true,
      title: "Edit User",
      okText: "Save",
      onCancel: () =>
        setModalProps({
          open: false,
        }),
      onOk: async () => {
        const data = form.getFieldsValue();
        const id = record.id;
        const response = await axios.put(
          `http://localhost:8080/users/${id}`,
          data
        );
        console.log("response", response);
        const status = response.status;
        if (status === 200) {
          message.success("Edit successfully");
          fetchUsers("");
          setSearchText("");
          setModalProps({
            open: false,
          });
        } else {
          message.error("Edit failed");
        }
      },
      children: <UserAddAndUpdate form={form} record={record} />,
    });
  };
  const handleDeleteUser = (record) => {
    setModalProps({
      open: true,
      title: "Delete User",
      okText: "OK",
      onCancel: () =>
        setModalProps({
          open: false,
        }),
      children: <UserDelete record={record} />,
      onOk: async () => {
        const response = await axios.delete(
          `http://localhost:8080/users/${record.id}`
        );
        console.log("response", response);
        const status = response.status;
        if (status === 200) {
          message.success("Delete successfully");
          fetchUsers();
          setSearchText("");
        } else {
          message.error("Delete failed");
        }
        setModalProps({ open: false });
      },
    });
  };
  const handleViewDetailUser = (record) => {
    setModalProps({
      open: true,
      title: "View Detail User",
      okText: "OK",
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
        <Button type="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </Col>
      <Col xs={24}>
        <Space>
          <Input
            placeholder="Search users"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary" onClick={() => fetchUsers(searchText)}>
            Search
          </Button>
        </Space>
      </Col>
      <Col xs={24}>
        <Table loading={loading} dataSource={dataSource} columns={columns} />
      </Col>
    </Row>
  );
};
export default Users;
