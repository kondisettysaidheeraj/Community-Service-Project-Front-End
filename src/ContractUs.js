import React from 'react';
import QueryForm from './QueryForm';

const ContactUs = () => {
  const handleSendMail = () => {
    window.location.href = 'mailto:kondisettysaidheeraj@gmail.com';
  };

  return (
    <>
      <h1>Contact Us</h1>
      <p>
      ◉ If you have any questions or inquiries, please feel free to reach out to us. We are here to assist you.
      </p>

      <h3>WhatsApp</h3>
      <p>
      ◉  To get in touch with us, you can reach us via WhatsApp at +91 6302331525.
      </p>

      <h3>Send Mail</h3>
      <button id="but1"onClick={handleSendMail}>Send Mail</button>
      <QueryForm/>
    </>
  );
};

export default ContactUs;
