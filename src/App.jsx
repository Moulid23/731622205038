import React from 'react';
import { Container, Typography, Card, CardContent, Grid, CssBaseline } from '@mui/material';

function App() {
  const user = {
    name: "Moulidhar VT",
    email: "moulidharmouli13@gmail.com",
    mobileNo: "8220955953",
    githubUsername: "Moulid23",
    rollNo: "731622205038",
    accessCode: "YtvpyJ"
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          User Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography><strong>Name:</strong> {user.name}</Typography>
                <Typography><strong>Email:</strong> {user.email}</Typography>
                <Typography><strong>Mobile No:</strong> {user.mobileNo}</Typography>
                <Typography><strong>GitHub:</strong> {user.githubUsername}</Typography>
                <Typography><strong>Roll No:</strong> {user.rollNo}</Typography>
                <Typography><strong>Access Code:</strong> {user.accessCode}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

