import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { useSelector } from "react-redux";
import AuthTokenService from "../../service/authTokenService";
import { toast } from "react-toastify";
import MoreInfoComponent from "../../components/MoreInfoComponent";

const RememberedCardsPage = () => {
  const [rememberedCards, setRememberedCards] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isLoggedIn = AuthTokenService.isUserLoggedIn();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (!userData) return;
    axios
      .get("/cards")
      .then(({ data }) => {
        const remembered = data.filter((card) =>
          card.remembers.includes(userData?._id)
        );
        setRememberedCards(remembered);
      })
      .catch((err) => {
        console.error("Error fetching remembered cards:", err);
        toast.error("Error fetching remembered cards ❌");
      });
  }, [userData]);

  const isAuth = () => {
    return isLoggedIn;
  };

  const handleRememberCard = (_id, remembered) => {
    axios
      .patch(`/cards/${_id}`, { remembered })
      .then(() => {
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        toast.error("Error remembering the card ❌");
        console.error("Error remembering the card:", error);
      });
  };

  const handleShowDetails = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

  const handleCloseDetails = () => {
    setSelectedCard(null);
  };

  return (
    <Container>
      <Typography
        variant="h2"
        fontFamily="lucida"
        textAlign="center"
        sx={{ margin: 2 }}
      >
        Rememberd🕯️
      </Typography>
      <Grid container spacing={2}>
        {rememberedCards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              _id={card._id}
              first={card.name.first}
              middle={card.name.middle}
              last={card.name.last}
              age={card.age}
              city={card.city}
              casualtiesOfWar={card.casualtiesOfWar}
              description={card.description}
              imageUrl={card.image.url}
              altText={card.image.alt}
              remembered={card.remembers.includes(userData?._id)}
              onRememberCard={handleRememberCard}
              isLoggedIn={isLoggedIn}
              isAuth={isAuth}
              userData={userData}
              onShowDetails={handleShowDetails}
            />
          </Grid>
        ))}
        {selectedCard && (
          <MoreInfoComponent
            cardDetails={selectedCard}
            onClose={handleCloseDetails}
          />
        )}
      </Grid>
    </Container>
  );
};

export default RememberedCardsPage;
