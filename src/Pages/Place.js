import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import React from "react";
import bg from "../images/model.jpg";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { model, modelPage } from "../Components/Animations";

const Place = () => {
  return (
    <Box
      component={motion.div}
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          height: "75%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Container
          component={motion.div}
          variants={model}
          initial={"hide"}
          animate={"shown"}
          maxWidth='xs'
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "&>*": {
              fontWeight: 600,
            },
          }}
        >
          <Typography>United states</Typography>
          <Typography>@gigihadid</Typography>
        </Container>
        <Typography
          variant='h1'
          variants={model}
          component={motion.h1}
          initial={"hide"}
          animate={"shown"}
          sx={{ textAlign: "center", fontFamily: "Passion One" }}
        >
          GIGI HADID
        </Typography>
        <Box
          component={motion.div}
          variants={modelPage}
          initial={"start"}
          animate={"animate"}
          sx={{
            height: "70%",
            width: "100%",
            marginInline: "auto",
            overflow: "hidden",
          }}
        >
          <Box
            component={motion.img}
            initial={{ scale: 1.07 }}
            animate={{ scale: 1 }}
            src={bg}
            sx={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Place;
