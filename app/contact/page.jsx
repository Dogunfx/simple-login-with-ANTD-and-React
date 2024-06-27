"use client";
import { Typography, Card, FloatButton, Modal, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState("Davido");
  const [contactForm] = Form.useForm();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleOk() {
    let newName = contactForm.getFieldValue("contactName");
    setContact(newName);
    closeModal()
    contactForm.resetFields();
  }

  return (
    <main>
      <Typography.Title>My Contact List</Typography.Title>
      <Card title="Below are the list of contact">
        <ul>
          <li>{contact}</li>
        </ul>
      </Card>

      <Modal
        open={isOpen}
        title="Add New Contact"
        onCancel={closeModal}
        onOk={handleOk}
      >
        <Form form={contactForm}>
          <Form.Item name="contactName">
            <Input placeholder="Enter Contact Name" />
          </Form.Item>
        </Form>
      </Modal>

      <FloatButton icon={<PlusOutlined />} onClick={openModal} />
    </main>
  );
}
