import { Grid } from "@mui/material";
import React from "react";
import SkillsCard from "./SkillsCard";
import { SkillsData } from "./SkillsData";

const Home = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        px: "20%",
      }}
      spacing={4}
    >
      {SkillsData.map((skill, text) => (
        <Grid item key={text} xs={12} sm={6} md={4}>
          <SkillsCard
            title={skill.title}
            content={skill.content}
            imagePath={skill.imagePath}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
