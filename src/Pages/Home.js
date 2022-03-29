import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import bg from "../images/model.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/page");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box sx={{ height: 380, width: 300 }}>
        <Box
          sx={{
            height: "90%",
            width: "100%",
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <Box
            component={motion.img}
            src={bg}
            sx={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              cursor: "pointer",
            }}
            whileHover={{
              scale: 1.07,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={handleNav}
          />
        </Box>
        <Box
          component={motion.div}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 0.5,
          }}
        >
          <Typography variant='h6' sx={{ fontFamily: "Passion One" }}>
            Gigi Hadid
          </Typography>
          <Typography sx={{ fontFamily: "Passion One" }}>@gigihadid</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
