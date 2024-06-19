"use client";
import { Input, Card, Button, Form } from "antd";
export default function Login() {
  const [myLoginForm] = Form.useForm();

  return (
    <Card title="My Login Form" className=" mx-auto my-52  sm:w-1/2">
      <h1 className="mb-3 text-2xl  sm:text-3xl">
        Please Enter your Details Below
      </h1>
      <Form form={myLoginForm}>
        <Form.Item name="email">
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
      </Form>
      <Button type="primary">Login</Button>
    </Card>
  );
}
