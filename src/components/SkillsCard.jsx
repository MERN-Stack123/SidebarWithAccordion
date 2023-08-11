import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  minHeight: "280px",
  borderRadius: "8px",
  padding: "16px",
  transition: "box-shadow 0.3s",
  position: "relative",
  "&:hover": {
    boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.2)",
  },
}));

const Image = styled(CardMedia)({
  borderRadius: "8px",
  minHeight: "140px",
});

const ImageOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  background: "rgba(0, 0, 0, 0.7)",
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 1,
  },
});

const Content = styled("div")({
  textAlign: "center",
  padding: "16px",
  color: "white",
});

function SkillsCard({ title, content, imagePath }) {
  return (
    <StyledCard>
      <Image component="img" height="auto" image={imagePath} alt={title} />
      <ImageOverlay>
        <Content>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{content}</Typography>
        </Content>
      </ImageOverlay>
    </StyledCard>
  );
}

export default SkillsCard;
