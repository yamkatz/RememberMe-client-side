import { Container, Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ContactUs = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container component="main">
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Typography variant="h2" fontFamily="lucida" textAlign="center">
            Contact Us
          </Typography>
          <Divider sx={{ margin: 2 }}></Divider>
          <Typography
            textAlign="center"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
              },
            }}
          >
            Dear beloved families, friends, and residents,
            <br /> The "Remember Me" application integrates advanced tools for
            documenting and commemorating our loved ones, the residents of the
            Ashkelon Regional Council, and those who fell within the council's
            jurisdiction while serving in the IDF, in underground movements, in
            security services, in the intelligence community, and in acts of
            hostility. The application includes information about the fallen:
            personal data, resumes, photos, and more. We do our utmost to ensure
            that the information presented here is reliable and up-to-date. If
            nevertheless errors or inaccuracies are found, we apologize in
            advance and ask you to contact us. Your collaboration will
            contribute to the strengthening of the project. Update the
            information,and send it to us as soon as possible, according to the
            detailed guidelines below. If you wish to add information to the
            site, please send materials.
            <br /> You can transfer the information and materials:
            <br /> • Directly to the project manager - Yam Katzavian, <br /> by
            email: Katzavianyam@gmail.com, or by phone: 055-6602255.
            <br /> • Scanned materials or links, via email:
            Katzavianyam@gmail.com.
            <br /> Please specify the name of the fallen on each item sent.
            Please coordinate among all family members, gather and send the
            information after reaching a unified and agreed-upon format.
          </Typography>
          <Divider sx={{ margin: 2 }}></Divider>
        </Box>
      </Grid>
    </Container>
  );
};

export default ContactUs;
