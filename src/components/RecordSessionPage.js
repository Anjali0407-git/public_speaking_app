import React, { useState } from 'react';
import ChooseEnvironment from '../components/ChooseEnvironment';
import ChooseAudience from '../components/ChooseAudience';
import ChooseDocument from '../components/ChooseDocument';
import VideoCapture from '../components/VideoCapture';

function RecordSessionPage() {
  const [step, setStep] = useState(1);
  const [documentUrl, setDocumentUrl] = useState(null);

  const nextStep = () => setStep(step + 1);

  switch (step) {
    case 1:
      return <ChooseEnvironment nextStep={nextStep} />;
    case 2:
      return <ChooseAudience nextStep={nextStep} />;
    case 3:
      return <ChooseDocument setDocument={setDocumentUrl} nextStep={nextStep} />;
    default:
    //   return <div>Recording...</div>; // Placeholder for recording component
    return <VideoCapture documentUrl={documentUrl} />;
  }
}

export default RecordSessionPage;
