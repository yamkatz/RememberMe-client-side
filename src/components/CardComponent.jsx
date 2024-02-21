import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FireplaceOutlinedIcon from "@mui/icons-material/FireplaceOutlined";

const CardComponent = ({
  _id,
  first,
  middle,
  last,
  age,
  city,
  description,
  imageUrl,
  altText,
  casualtiesOfWar,
  remembered,
  onDeleteCard,
  onEditCard,
  onRememberCard,
  isLoggedIn,
  userData,
  onShowDetails,
}) => {
  const handleDeleteCardClick = () => {
    onDeleteCard(_id);
  };

  const handleClickEditCard = () => {
    onEditCard(_id);
  };

  const handleRememberCardClick = () => {
    onRememberCard(_id, !remembered);
  };

  const handleShowDetailsClick = () => {
    onShowDetails({
      imageUrl,
      altText,
      name: `${first} ${middle} ${last}`,
      age,
      city,
      casualtiesOfWar,
      description,
    });
  };

  const isAuth = () => {
    if (isLoggedIn && userData && userData.isAdmin) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card>
      <CardActionArea onClick={handleShowDetailsClick}>
        <CardMedia
          sx={{ height: "45vh" }}
          component="img"
          image={imageUrl}
          alt={altText}
        />
      </CardActionArea>
      <CardContent>
        <CardHeader
          title={`${first} ${middle} ${last}`}
          sx={{ p: 0, mb: 1, textAlign: "center" }}
        />
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ p: 0, mb: 1, textAlign: "center" }}>
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Age:{" "}
            </Typography>
            {age}
          </Typography>
          <Typography variant="body2" sx={{ p: 0, mb: 1, textAlign: "center" }}>
            <Typography fontWeight="500" variant="subtitle1" component="span">
              Moshav / Kibutz:{" "}
            </Typography>
            {city}
          </Typography>
          {casualtiesOfWar && (
            <Typography
              variant="body2"
              sx={{ p: 0, mb: 1, textAlign: "center" }}
            >
              <Typography fontWeight="500" variant="subtitle1" component="span">
                casualtiesOfWar:{" "}
              </Typography>
              {casualtiesOfWar}
            </Typography>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            {isAuth() && (
              <React.Fragment>
                <IconButton onClick={handleClickEditCard}>
                  <CreateIcon />
                </IconButton>
                <IconButton onClick={handleDeleteCardClick}>
                  <DeleteIcon />
                </IconButton>
              </React.Fragment>
            )}
          </Box>
          <Box>
            {isLoggedIn && (
              <IconButton
                sx={{ transform: "scale(1.7)" }}
                onClick={handleRememberCardClick}
              >
                <FireplaceOutlinedIcon
                  color={remembered ? "lightCandle" : "false"}
                />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
