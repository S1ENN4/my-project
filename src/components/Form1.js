import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}
export default MyForm;