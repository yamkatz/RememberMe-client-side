import { useState } from "react";
import { TextField, Grid, Typography, Button, Box, Alert } from "@mui/material";
import axios from "axios";
import { validateCreateCard } from "../../validation/createCardValidation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import CasualtiesOfWarSelect from "../../components/CasualtiesOfWarSelect";

const CreateCardPage = () => {
  const navigate = useNavigate();
  const [errorsState, setErrorsState] = useState(null);
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    age: 0,
    city: "",
    description: "",
    url: "",
    alt: "profile",
    casualtiesOfWar: "",
    userId: "65c60ed0f9c91371142120fa",
  });

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const isSubmitDisabled = () => {
    const requiredFields = ["first", "last", "age", "city"];

    return requiredFields.some((field) => !inputsValue[field]);
  };

  const renderTextField = (name, label, props = {}) => (
    <Grid item xs={12} sm={6} key={name}>
      <TextField
        required={props.required}
        fullWidth
        id={name}
        label={label}
        name={name}
        autoComplete={`new-${name}`}
        defaultValue={inputsValue[name]}
        onChange={handleInputsChange}
        {...props}
      />
      {errorsState && errorsState[name] && (
        <Alert severity="warning">{errorsState[name]}</Alert>
      )}
    </Grid>
  );

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const validationErrors = validateCreateCard(inputsValue);
      if (validationErrors) {
        setErrorsState(validationErrors);
        return;
      }

      const cardData = {
        name: {
          first: inputsValue.first,
          middle: inputsValue.middle,
          last: inputsValue.last,
        },
        age: +inputsValue.age,
        city: inputsValue.city,
        description: inputsValue.description,
        image: {
          url:
            inputsValue.url ||
            "https://img.freepik.com/free-photo/one-romance-romantic-candle-memorial_1232-3535.jpg?w=900&t=st=1707812351~exp=1707812951~hmac=fd6cb9c86cb23685672320f383732de5e97b2fce1f713ee71ee490eccfbe14ff",
          alt: inputsValue.alt || "profile",
        },
        casualtiesOfWar: inputsValue.casualtiesOfWar,
        userId: inputsValue.userId,
      };

      await axios.post("/cards", cardData);
      navigate(ROUTES.HOME);
      toast.success("New card created ✅");
    } catch (err) {
      toast.error("Failed creating new card 🚫");
      console.error("Error during form submission:", err);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Create a Card
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {renderTextField("first", "First", { required: true })}
          {renderTextField("middle", "Middle")}
          {renderTextField("last", "Last", { required: true })}
          {renderTextField("age", "Age", { type: "number", required: true })}
          {renderTextField("city", "Moshav / Kibutz", { required: true })}
          {renderTextField("description", "Description")}
          {renderTextField("url", "Url")}
          {renderTextField("alt", "Alt")}
          <Grid item xs={12} sm={6}>
            <CasualtiesOfWarSelect
              value={inputsValue.casualtiesOfWar}
              onChange={handleInputsChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isSubmitDisabled()}
        >
          Create Card
        </Button>
      </Box>
    </Box>
  );
};

export default CreateCardPage;
