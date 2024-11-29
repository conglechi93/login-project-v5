import anh2 from "../../image/anh2.png";
import { Divider, Checkbox, Button, Form, Input } from "antd";
import React from "react";
import { BorderInnerOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
// Định nghĩa hàm onFinish

const LoginContent = ({ handleChangeToRegister }) => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Form values:", values);
    // Xử lý logic sau khi form được submit ở đây
    // B1: Lấy giá trị người dùng nhập (email, password)
    // B2: Call API đăng nhập
    // B3: Lấy response để xử lý.
    // + Nếu status == 200 => chuyển sang /users route
    // + Ngược lại => báo lỗi
    navigate("/users");
  };
  return (
    <div className="login-content">
      <div className="outlined">
        <BorderInnerOutlined />
      </div>
      <div className="login">
        <p className="login-text">Login to your Account</p>
        <p className="login-paragraph">
          See what is going on with your business
        </p>
        <Button className="login-button">
          {" "}
          <img id="image2" src={anh2} />
          Continue with Google
        </Button>
        <Divider
          variant="dashed"
          style={{
            borderColor: "black",
            fontSize: "10px",
          }}
          dashed
        >
          or Sign in with Email
        </Divider>
        <Form layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["name"]}>
              <MyFormItem name="Email" label="Email">
                <Input />
              </MyFormItem>
              <MyFormItem name="Password" label="Password">
                <Input />
              </MyFormItem>
            </MyFormItemGroup>
          </MyFormItemGroup>
          <Form.Item name="Remember Me" valuePropName="checked">
            <Checkbox htmlType="checked" className="ant-remember">
              Remember Me
            </Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="Login" className="ant-Login">
            Login
          </Button>
        </Form>
      </div>
      <div>
        <a className="registered">Not Registered?</a>
        <a href="#" className="create" onClick={handleChangeToRegister}>
          {" "}
          Create an account
        </a>
      </div>
    </div>
  );
};
export default LoginContent;
