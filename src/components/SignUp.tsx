import { Box, Button, TextField } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

const SignUp = () => {
  return (
    <form style={{ margin: "0 30%" }}>
      <TextField
        required
        id="user@mail"
        label="Электронная почта"
        helperText=""
        size="small"
        // sx={{
        //   backgroundColor: theme.palette.mode,
        // }}
      />
      <TextField
        required
        id="userpassword"
        label="Пароль"
        helperText=""
        size="small"
        // sx={{
        //   backgroundColor: `${dark.background.paper}`,
        // }}
      />
      <TextField
        required
        id="username"
        label="Имя"
        helperText=""
        size="small"
        // sx={{
        //   backgroundColor: `${dark.background.paper}`,
        // }}
      />
      <TextField
        required
        id="usernumber"
        label="Номер телефона"
        helperText=""
        size="small"
        // sx={{
        //   backgroundColor: `${dark.background.paper}`,
        // }}
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "20px",
        }}
      >
        <Button variant="contained" color="error" size="small">
          Сброс
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Зарегистрироваться
        </Button>
      </Box>
    </form>
  );
};
export default SignUp;
