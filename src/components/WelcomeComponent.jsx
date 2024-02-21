import { Container, Divider, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const WelcomeComponent = () => {
  const navigate = useNavigate();
  const handleSignUP = () => {
    navigate(ROUTES.REGISTER);
  };
  return (
    <Container>
      <Typography variant="h2" fontFamily="lucida" textAlign="center">
        Remember Me
      </Typography>
      <Typography textAlign="center">
        The Eshkol Regional Council stands deeply sorrowed by the tragic loss of
        our cherished residents, beloved members, and dear friends within our
        community. In this time of unimaginable grief, we support the grieving
        families, embracing them tightly. <br /> In honor of those we have lost,
        this commemorative App serves as a tribute to the fallen heroes of the
        "Iron Swords" War. <br /> Please take a moment to remember them, read
        their stories, and honor their legacy. You are invited to light a
        virtual memorial candle, a symbolic gesture of remembrance and reverence
        for those who are no longer with us.
        <br /> Remember that in the act of remembering, their spirits endure. In
        the words of the timeless adage: <br />
        <span
          component="div"
          style={{
            transform: "skewX(+15deg)",
            display: "inline-block",
            fontSize: "1.3rem",
            fontFamily: "lucida",
          }}
        >
          "If I'm remembered, I exist"
        </span>
      </Typography>
      <Box sx={{ m: 1, textAlign: "center" }}>
        <Button variant="contained" size="small" onClick={handleSignUP}>
          Click to remeber
        </Button>
      </Box>
      <Divider sx={{ margin: 3 }}></Divider>
    </Container>
  );
};

export default WelcomeComponent;
