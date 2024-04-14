import React from 'react';

function ChooseAudience({ nextStep }) {
  return (
    <div>
      <h2>Choose Audience Type</h2>
      {/* Example of audience type selection - implement according to your needs */}
      <button onClick={nextStep}>Students</button>
      <button onClick={nextStep}>Professionals</button>
    </div>
  );
}

export default ChooseAudience;
