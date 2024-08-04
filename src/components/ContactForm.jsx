import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Success:', response);
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log('Error:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-center text-lg">{status}</p>}
    </div>
  );
}
