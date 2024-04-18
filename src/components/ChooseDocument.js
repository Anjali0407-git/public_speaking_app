function ChooseDocument({ setDocument, nextStep }) {
    const handleDocumentSelect = (event) => {
      setDocument(URL.createObjectURL(event.target.files[0]));
    };
  
    return (
      <div>
        <h2>Select a Document</h2>
        <div>
          <input type="file" onChange={handleDocumentSelect} accept=".pdf,.docx" />
        </div>
        <div>
          <button onClick={() => nextStep()}>Proceed without file</button>
          <button onClick={() => setDocument && nextStep()}>Proceed with file</button>
        </div>
      </div>
    );
}
 
export default ChooseDocument;