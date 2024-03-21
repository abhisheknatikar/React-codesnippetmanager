import React from 'react';

const Page2 = ({ submissions }) => {
  return (
    <div>
      <h1>Submitted Code Snippets</h1>
      <table>
        <thead>
          <tr>
            <th>Code Snippet</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((snippet, index) => (
            <tr key={index}>
              <td>{snippet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page2;
