"use client";
import { Input, Card, Button, Form, message } from "antd";
import { useRouter } from "next/navigation";
export default function Login() {
  const [myLoginForm] = Form.useForm();
  let router = useRouter();

  async function handleLogin() {
    await myLoginForm.validateFields();
    let email = myLoginForm.getFieldValue("email");
    let password = myLoginForm.getFieldValue("password");

    if (email == "dogunfx@gmail.com" && password == "12345") {
      message.success("Login successful");
      router.push("/dashboard");
    } else {
      message.error("Login Failed");
    }
  }

  return (
    <Card title="My Login Form" className=" mx-auto my-52  sm:w-1/2">
      <h1 className="mb-3 text-2xl  sm:text-3xl">
        Please Enter your Details Below
      </h1>
      <Form form={myLoginForm}>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </Card>
  );
}
