import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";

function NotFoundPage() {
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h1">Page not found</Typography>
      <Link to="/">Back to projects</Link>
    </Container>
  );
}

export default NotFoundPage;
