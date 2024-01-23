import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../layouts/AdminLayout/components/Logo";
//data
import { useCookies } from "react-cookie";
import auth from "../../services/api/auth";
const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const res = await auth.actionAuth({
        Email: data.get("email"),
        Password: data.get("password"),
      });
      if (res.statusCode == 200) {
        toast.success(`Successful login!`);
        // if (rememberMe) {
        //   setCookie(
        //     "user",
        //     { Email: data.get("email"), Password: data.get("password") },
        //     { path: "/setting/webSetting" }
        //   );
        // }
        switch (res.data.userRole) {
          case "admin":
            navigate("/setting/webSetting");
            break;
          case "user":
            navigate("asdf");
            break;
          case "teacher":
            navigate("/dashboard");
            break;
          case "teamleder":
            navigate("asd");
            break;
          case "customer":
            navigate("asd");
            break;
          default:
            navigate("/");
        }
      } else toast.error(`Account and password don't match!`);
    } catch (err) {
      console.log(err);
      toast.error(`Unstable transmission line!`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: "16vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Logo />

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              onChange={() => setRememberMe(!rememberMe)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: "#f4a5c7",
                "&:hover": {
                  background: "#ff66a2",
                },
              }}>
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign In"
              )}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
