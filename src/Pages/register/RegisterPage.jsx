import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { registerValidation } from "../../validation/registerValidation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { Alert } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { normalizeRegisterData } from "./normalizeRegisterData";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [errorsState, setErrorsState] = useState(null);
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const isSubmitDisabled = () => {
    const requiredFields = [
      "first",
      "last",
      "country",
      "city",
      "street",
      "houseNumber",
      "phone",
      "email",
      "password",
    ];
    return requiredFields.some((field) => !inputsValue[field]);
  };

  const renderTextField = (name, label, props = {}) => (
    <Grid item xs={12} sm={6} key={name}>
      {name === "password" && (
        <Tooltip
          title={
            <Typography variant="body1">
              Password must be at least 7 characters long and contain an
              uppercase letter, a lowercase letter, a number, and one of the
              following characters: !@#$%^&*-
            </Typography>
          }
        >
          <InfoOutlinedIcon style={{ marginRight: "5px", cursor: "pointer" }} />
        </Tooltip>
      )}
      <TextField
        required={props.required}
        fullWidth
        id={name}
        label={label}
        name={name}
        autoComplete={`new-${name}`}
        value={inputsValue[name]}
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

      const validationErrors = registerValidation(inputsValue);
      if (validationErrors) {
        setErrorsState(validationErrors);
        return;
      }

      const data = normalizeRegisterData(inputsValue);

      await axios.post("/users", data);
      navigate(ROUTES.LOGIN);
      toast.success("You signed up successfully ✅");
    } catch (err) {
      toast.error("Failed signing up 🚫");
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
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {renderTextField("first", "First Name", { required: true })}
          {renderTextField("middle", "Middle Name")}
          {renderTextField("last", "Last Name", { required: true })}
          {renderTextField("country", "Country", { required: true })}
          {renderTextField("city", "City", { required: true })}
          {renderTextField("street", "Street", { required: true })}
          {renderTextField("houseNumber", "House Number", {
            required: true,
          })}
          {renderTextField("phone", "Phone", { required: true })}
          {renderTextField("email", "Email Address", {
            required: true,
          })}
          {renderTextField("password", "Password", {
            type: "password",
            required: true,
          })}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isSubmitDisabled()}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
