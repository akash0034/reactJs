import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/slices/userSlice";

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [info, setValue] = useState({
    email: "",
    password: "",
  });


  // to handle onInputChange 
  const onChange = (event: any) => {
    event.preventDefault();
    // setState against the input filed name
    setValue({
      ...info,
      [event?.target?.name]: event.target.value,
    });
  };


  // to Store userSession 
  const handleSubmit = () => {
    const { email, password } = info;
    dispatch(signIn({ email, password }));
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          marginTop: 18,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            alignSelf: "center",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={onChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
