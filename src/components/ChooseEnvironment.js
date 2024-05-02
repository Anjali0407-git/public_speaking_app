import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

function ChooseEnvironment({ nextStep }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Choose an Environment
        </Typography>
        <Button variant="contained" color="primary" onClick={nextStep} style={{ margin: 8 }}>
          Classroom
        </Button>
        <Button variant="contained" color="primary" onClick={nextStep} style={{ margin: 8 }}>
          Auditorium
        </Button>
      </CardContent>
    </Card>
  );
}

export default ChooseEnvironment;
