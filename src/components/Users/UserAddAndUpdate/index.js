import { Form, Input } from "antd";
import { useEffect } from "react";

const UserAddAndUpdate = ({ form, record }) => {
  useEffect(() => {
    form.setFieldsValue({
      name: record?.name,
      phone: record?.phone,
      age: record?.age,
      address: record?.address,
    });
  }, [record]);
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Form.Item
          name={"name"}
          label="Name"
          required
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name={"phone"}
          label="Phone"
          required
          rules={[{ required: true, message: "Please enter your phone" }]}
        >
          <Input placeholder="Enter your phone" />
        </Form.Item>
        <Form.Item
          name={"age"}
          label="Age"
          required
          rules={[{ required: true, message: "Please enter your age" }]}
        >
          <Input placeholder="Enter your age" />
        </Form.Item>
        <Form.Item
          name={"address"}
          label="Address"
          required
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input placeholder="Enter your address" />
        </Form.Item>
      </Form>
    </div>
  );
};
export default UserAddAndUpdate;
