"use client";
import { Button, message, Form, Input } from "antd";
export default function Home() {
  var [form] = Form.useForm();

  async function handleClick() {
    await form.validateFields();
    var email = form.getFieldValue("email");
    var password = form.getFieldValue("password");

    if (email == "dogunfx@gmail.com" && password == "12345") {
      message.success("Login successful");
    } else {
      message.error("Email or Password not Correct");
    }
  }
  return (
    <main className="p-5 mx-auto m-5 shadow-md w-1/2 ">
      <h1 className="mb-4 text-2xl">Login into Bank</h1>
      <Form form={form}>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input placeholder="Enter Email Address" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter Your password" />
        </Form.Item>
      </Form>

      <Button type="primary" onClick={handleClick}>
        Login
      </Button>
    </main>
  );
}
