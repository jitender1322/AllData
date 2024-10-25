// src/pages/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className='pop' style={{ position: 'fixed', inset: '0', backgroundColor: 'black', opacity: '.9', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }} >
      <img src="" alt="" />
    </div>
  );
}

export default Contact;
