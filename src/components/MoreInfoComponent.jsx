import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MoreInfoComponent = ({ cardDetails, onClose }) => {
  const { imageUrl, altText, name, age, city, casualtiesOfWar, description } =
    cardDetails;

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md">
      <DialogTitle>
        <Typography
          variant="h3"
          style={{
            marginBottom: "8px",
            textAlign: "center",
            fontWeight: "500",
            fontFamily: "lucida",
          }}
        >
          {name}
        </Typography>
        <CardMedia
          component="img"
          src={imageUrl}
          alt={altText}
          style={{
            maxWidth: "400px",
            maxHeight: "400px",
            objectFit: "contain",
            margin: "auto",
            display: "block",
          }}
        />
        <IconButton
          aria-label="close"
          style={{ position: "absolute", top: "8px", right: "8px" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            p: 0,
            mb: 1,
            textAlign: "center",
          }}
        >
          Age: {age}
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            p: 0,
            mb: 1,
            textAlign: "center",
          }}
        >
          Moshav / Kibutz: {city}
        </Typography>
        {casualtiesOfWar && (
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              p: 0,
              mb: 1,
              textAlign: "center",
            }}
          >
            Casualties of War: {casualtiesOfWar}
          </Typography>
        )}
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{
            p: 0,
            mb: 1,
            textAlign: "center",
          }}
        >
          {description}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default MoreInfoComponent;
