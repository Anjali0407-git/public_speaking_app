function ChooseDocument({ setDocument, nextStep }) {
    const handleDocumentSelect = (event) => {
      setDocument(URL.createObjectURL(event.target.files[0]));
      nextStep();
    };
  
    return (
      <div>
        <h2>Select a Document</h2>
        <input type="file" onChange={handleDocumentSelect} accept=".pdf,.docx" />
      </div>
    );
}
 
export default ChooseDocument;