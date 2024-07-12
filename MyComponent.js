import React from 'react';

function MyComponent() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.download = 'resume.pdf';
    link.href = 'YACHASREEYA.pdf'; // replace with your resume file
    link.click();
  };

  return (
    <div>
      <button onClick={handleDownloadResume}>Download Resume</button>
    </div>
  );
}
export default MyComponent;