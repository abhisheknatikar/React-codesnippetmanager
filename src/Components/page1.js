import React, { useState } from 'react';

const Page1 = ({ onSubmit }) => {
  const [codeSnippet, setCodeSnippet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(codeSnippet);
    setCodeSnippet('');
  };

  return (
    <div>
      <h1>Submit Code Snippet</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={codeSnippet}
          onChange={(e) => setCodeSnippet(e.target.value)}
          placeholder="Enter your code snippet..."
          rows={10}
          cols={50}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page1;
