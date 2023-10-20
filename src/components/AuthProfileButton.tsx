import { Button, styled } from "@mui/material";

const BootstrapButton = styled(Button)({
  borderColor: "white",
  lineHeight: "normal",
  color: "white",
  "&:hover": {
    borderColor: "#fc0d45",
  },
  "&:focus": {
    backgroundColor: "#fc0d45",
  },
});

const AuthProfileButton = () => {
  return (
    <BootstrapButton variant="outlined" href="/auth/signIn" size="medium">
      Войти
    </BootstrapButton>
  );
};

export default AuthProfileButton;
