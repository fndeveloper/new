// App.js

import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf2nfOINIMor0or-r7ricZ06qt-H18XUw",
  authDomain: "mamdaisy-24a4b.firebaseapp.com",
  projectId: "mamdaisy-24a4b",
  storageBucket: "mamdaisy-24a4b.firebasestorage.app",
  messagingSenderId: "689045411991",
  appId: "1:689045411991:web:b29221a98143da3ebbf1d2",
  measurementId: "G-HQ2Q03V6NH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// EventRegistrationModal Component
const EventRegistrationModal = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const successMessage = () => {
    messageApi.open({
      type: 'success',
      content: 'Your registration has been successfully submitted!',
      duration: 5,
    });
  };

  // Form submit handler
  const onSubmit = async (values) => {
    setLoading(true);

    try {
      // Add registration data to Firestore
      await addDoc(collection(db, "event-reg"), {
        ...values,
        timestamp: serverTimestamp(),
      });

      // Send the form data to Web3Forms for email
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("contact", values.contact);
      formData.append("access_key", "d92bdf8f-5c6e-41f8-8b11-8b305e40cbf1"); // Replace with your Web3Forms key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        successMessage();
      } else {
        message.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      message.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
      setOpen(false); // Close the modal after form submission
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={<p>Event Registration</p>}
        footer={
          <Button
            type="primary"
            onClick={() => setOpen(false)} 
            loading={loading}
          >
            Close
          </Button>
        }
        open={open}
        onCancel={() => setOpen(false)}
        loading={loading}
      >
        <Form onFinish={onSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contact Number"
            name="contact"
            rules={[{ required: true, message: 'Please input your contact number!' }]}
          >
            <Input />
          </Form.Item>

          {/* Add more fields as needed */}

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading} 
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

// Venues Component
function Venues() {
  const [openModal, setOpenModal] = useState(false);

  const handleRegisterClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      {/* =============== BANNER ================= */}
      <div className="venue-bg"></div> 
      {/* =============== BANNER ================= */}

      {/* =============== DIV ================= */}
      <div className="container-fluid px-2 d-flex flex-wrap my-4">
        <div className="col-lg-4">
          <div className="col-11 card">
            <div className="cards1 card-img-to"></div>
            <div className="card-body">
              <div className="card-title d-flex justify-content-between">
                <h5 className="card-title d-flex">Habit-Events</h5>
                <p>09.11.24</p>
              </div>
              <a href="#" className="bt1" onClick={handleRegisterClick}>
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* Add other cards if needed */}

      </div>
      {/* =============== DIV ================= */}

      {/* Event Registration Modal */}
      <EventRegistrationModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}

export default Venues;
