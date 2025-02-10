import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Import serverTimestamp
import { message } from 'antd'; // Assuming you're using Ant Design for notifications

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf2nfOINIMor0or-r7ricZ06qt-H18XUw",
  authDomain: "mamdaisy-24a4b.firebaseapp.com",
  projectId: "mamdaisy-24a4b",
  storageBucket: "mamdaisy-24a4b.firebasestorage.app",
  messagingSenderId: "689045411991",
  appId: "1:689045411991:web:b29221a98143da3ebbf1d2",
  measurementId: "G-HQ2Q03V6NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Contact() {
  const [result, setResult] = useState("");

  // Success message function using Ant Design's message API
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your message has been successfully forwarded to the admin. Thank you for reaching out!',
      duration: 5,
    });
  };

  // Form submit handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      // Add data to Firestore collection "contact-us"
      await addDoc(collection(db, "contact-us"), {
        ...formObject,
        timestamp: serverTimestamp(), // Correct usage of serverTimestamp
      });

      // Send email using Web3Forms
      formData.append("access_key", "d92bdf8f-5c6e-41f8-8b11-8b305e40cbf1"); // Replace with your key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        event.target.reset(); // Reset the form
        success(); // Show success notification
      } else {
        setResult("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      setResult("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <div className="py-5 bg-black">
        <div className="py-5">
          {/* Form */}
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name="name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Form
            </button>
          </form>

          {/* Display result */}
          <div className="mt-3">
            <span>{result}</span>
          </div>

          {/* Ant Design Message Notifications */}
          {contextHolder}
        </div>
      </div>
    </>
  );
}
