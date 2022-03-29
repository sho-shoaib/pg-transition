import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          backgroundColor: "inherit",
          color: "inherit",
          pt: 2,
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontFamily: "Passion One",
              cursor: "pointer",
              paddingInline: 2,
            }}
            onClick={handleNav}
          >
            Home
          </Typography>
          <Button
            color='inherit'
            variant='outlined'
            sx={{ borderRadius: "50%", height: 63, fontFamily: "Passion One" }}
          >
            Menu
          </Button>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
