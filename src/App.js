import React, { useState } from 'react';
import Page1 from './Components/page1'
import Page2 from './Components/page2';

function App() {
  const [submissions, setSubmissions] = useState([]);

  const handleSubmission = (codeSnippet) => {
    setSubmissions([...submissions, codeSnippet]);
  };

  return (
    <div>
      <Page1 onSubmit={handleSubmission} />
      <Page2 submissions={submissions} />
    </div>
  );
}

export default App;
