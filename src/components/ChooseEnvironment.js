import React from 'react';

function ChooseEnvironment({ nextStep }) {
  return (
    <div>
      <h2>Choose an Environment</h2>
      {/* Example of environment selection - implement according to your needs */}
      <button onClick={nextStep}>Classroom</button>
      <button onClick={nextStep}>Auditorium</button>
    </div>
  );
}

export default ChooseEnvironment;
