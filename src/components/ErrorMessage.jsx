import React from 'react'

export default function ErrorMessage({ message }) {
  return (
    <div>
      <p className="error">🔴 {message} </p>
    </div>
  );
}
