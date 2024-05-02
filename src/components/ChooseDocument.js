import React from 'react';
import { Button, Card, CardContent, Typography, Input } from '@material-ui/core';

function ChooseDocument({ setDocument, nextStep }) {
    const handleDocumentSelect = (event) => {
        setDocument(URL.createObjectURL(event.target.files[0]));
    };

    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Select a Document
          </Typography>
          <Input type="file" onChange={handleDocumentSelect} accept=".pdf,.docx" style={{ margin: 8 }} />
          <div>
          <Button variant="contained" color="primary" onClick={() => setDocument && nextStep()} style={{ margin: 8 }}>
              Proceed with file
            </Button>
            <Button variant="contained" color="secondary" onClick={() => nextStep()} style={{ margin: 8 }}>
              Proceed without file
            </Button>
            
          </div>
        </CardContent>
      </Card>
    );
}

export default ChooseDocument;