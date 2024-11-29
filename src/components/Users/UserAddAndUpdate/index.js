import { Form, Input } from "antd";
import { useEffect } from "react";

const UserAddAndUpdate = ({ form, record }) => {
  // Validate form
  // Min max
  // regex for phone, email
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
          <Input placeholder="Enter your name" maxLength={255} />
        </Form.Item>
        <Form.Item
          name={"phone"}
          label="Phone"
          required
          rules={[
            { required: true, message: "Please enter your phone" },
            {
              pattern: /^[0-9]*$/,
              message: "Please enter a valid phone number",
            },
          ]}
        >
          <Input placeholder="Enter your phone" maxLength={15} />
        </Form.Item>
        <Form.Item
          name={"age"}
          label="Age"
          required
          rules={[{ required: true, message: "Please enter your age" }]}
        >
          <Input placeholder="Enter your age" maxLength={3} max={120} />
        </Form.Item>
        <Form.Item
          name={"address"}
          label="Address"
          required
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input placeholder="Enter your address" maxLength={500} />
        </Form.Item>
      </Form>
    </div>
  );
};
export default UserAddAndUpdate;
