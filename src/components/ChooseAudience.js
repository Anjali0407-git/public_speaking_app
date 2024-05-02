import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

function ChooseAudience({ nextStep }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Choose Audience Type
        </Typography>
        <Button variant="contained" color="primary" onClick={nextStep} style={{ margin: 8 }}>
          Students
        </Button>
        <Button variant="contained" color="primary" onClick={nextStep} style={{ margin: 8 }}>
          Professionals
        </Button>
      </CardContent>
    </Card>
  );
}

export default ChooseAudience;
