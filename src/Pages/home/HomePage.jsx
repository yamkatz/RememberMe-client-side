import React, { useEffect, useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate, useLocation } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { useSelector } from "react-redux";
import WelcomeComponent from "../../components/WelcomeComponent";
import AuthTokenService from "../../service/authTokenService";
import { toast } from "react-toastify";
import MoreInfoComponent from "../../components/MoreInfoComponent";
import useQueryParams from "../../hooks/useQueryParams";
import TableView from "../../components/TableView";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [initialDataFromServer, setInitialDataFromServer] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isLoggedIn = AuthTokenService.isUserLoggedIn();
  const [selectedCard, setSelectedCard] = useState(null);
  const queryParams = useQueryParams();
  const location = useLocation();
  const [viewType, setViewType] = useState("card");

  useEffect(() => {
    if (userData) {
      axios
        .get("/cards")
        .then(({ data }) => {
          setDataFromServer(data);
          setInitialDataFromServer(data);
        })
        .catch((err) => {
          console.error("Error fetching cards:", err);
          toast.error("Error fetching cards ❌");
        });
    } else {
      axios
        .get("/cards")
        .then(({ data }) => {
          setDataFromServer(data);
          setInitialDataFromServer(data);
        })
        .catch((err) => {
          console.error("Error fetching cards:", err);
          toast.error("Error fetching cards ❌");
        });
    }
  }, [userData]);

  useEffect(() => {
    const searchQuery = queryParams.filter?.toLowerCase();
    if (!searchQuery) {
      setDataFromServer(initialDataFromServer);
      return;
    }
    const filteredCards = initialDataFromServer.filter(
      (card) =>
        card.name.first.toLowerCase().startsWith(searchQuery) ||
        card.name.middle.toLowerCase().startsWith(searchQuery) ||
        card.name.last.toLowerCase().startsWith(searchQuery) ||
        card.age.toString().startsWith(searchQuery) ||
        card.city.toLowerCase().startsWith(searchQuery) ||
        card.casualtiesOfWar.toLowerCase().startsWith(searchQuery)
    );
    setDataFromServer(filteredCards);
  }, [queryParams.filter, location.pathname, initialDataFromServer]);

  const isAuth = () => {
    return isLoggedIn && userData && userData.isAdmin;
  };

  const handleDeleteCard = (_id) => {
    axios
      .delete(`/cards/${_id}`)
      .then(() => {
        setDataFromServer(dataFromServer.filter((card) => card._id !== _id));
        toast.success("Card deleted successfully! ✅");
      })
      .catch((error) => {
        toast.error("Error deleting the card ❌");
        console.error("Error deleting card:", error);
      });
  };

  const handleEditCard = (_id) => {
    const cardToEdit = dataFromServer.find((card) => card._id === _id);
    if (cardToEdit && cardToEdit.userId === userData._id) {
      navigate(`${ROUTES.EDITCARD}/${_id}`);
    } else {
      toast.error("Only Admin can edit cards! 🚫");
    }
  };

  const handleRememberCard = (_id, remembered) => {
    axios
      .patch(`/cards/${_id}`, { remembered })
      .then(() => {
        navigate(ROUTES.REMEMBERED);
      })
      .catch((error) => {
        toast.error("Error liking the card ❌");
        console.error("Error liking card:", error);
      });
  };

  const handleShowDetails = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

  const handleCloseDetails = () => {
    setSelectedCard(null);
  };

  const toggleViewType = () => {
    setViewType((prevType) => (prevType === "card" ? "table" : "card"));
  };

  return (
    <Container>
      <WelcomeComponent />
      <Button
        variant="contained"
        size="small"
        sx={{ m: 1 }}
        onClick={toggleViewType}
      >
        {viewType === "card" ? "Switch to Table View" : "Switch to Card View"}
      </Button>
      {viewType === "card" ? (
        <Grid container spacing={2}>
          {dataFromServer.map((card) => (
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
                onDeleteCard={handleDeleteCard}
                onEditCard={handleEditCard}
                onRememberCard={handleRememberCard}
                isLoggedIn={isLoggedIn}
                isAuth={isAuth}
                userData={userData}
                onShowDetails={handleShowDetails}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <TableView data={dataFromServer} />
      )}
      {selectedCard && (
        <MoreInfoComponent
          cardDetails={selectedCard}
          onClose={handleCloseDetails}
        />
      )}
    </Container>
  );
};

export default HomePage;
