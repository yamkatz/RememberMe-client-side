import { Container, Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid item xs={12}>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Typography variant="h2" fontFamily="lucida" textAlign="center">
            The Story Of Ein Habsor
            <br />
            My Home
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
            On Saturday, October 7th at half past six, my boyfriend and I woke
            up to several "Tzeva Adom" alerts. We ran to the Migonit near our
            house. The Tzeva Adom" alerts did not stop and a heavy attack of
            rockets from Gaza continued to arrive. We ran as fast as we could to
            the house of my boyfriend's grandparents, which is right on the
            Moshav's fence, and we entered the MMD with them. There was no
            cellular reception in the MMD, we stood in the crowd in the MMD with
            uncertainty. We are used to the "Tzeva Adom" alerts but felt this
            was unusual. In the few minutes of respite, we went out and sat down
            in the living room and watched the news, the reporters still hadn't
            come to their senses and uncertain headlines ran. As time passes the
            picture becomes clearer and videos and pictures shock our eyes and
            cast terror and fear. Multiple infiltrations of terrorists in the
            moshavim and kibbutzim of our Eshkol settlement, videos of white
            jeeps with armed terrorist squads driving in our homes. And the
            terrible news begins to arrive, the number of people killed slowly
            climbs from 20 to 40, to 100, to 200, to 300, to 400, and thousands
            are injured. Complete shock envelops us, we refuse to believe it was
            happening, it sounded like a movie, a horror movie. More news began:
            there are abductees in Gaza. Children, boys and girls, men and
            women, and the elderly. Alerts of fear of terrorist infiltration in
            our moshav have begun. We locked the whole house and hid in the MMD.
            We stood with each other's arms in silence. We heard gunshots and
            explosions and shouts in Arabic, and we thought that the gunshots we
            were hearing were from the IDF who had already arrived to fight the
            terrorists. In retrospect, after we were more than 24 hours in the
            MMD, without reception, without knowing what would happen to us. We
            found out that the IDF only arrived in the afternoon from the
            beginning of the massacre that began at six thirty. The Emergency
            Squad of our moshav saved our lives and fought the terrorists at the
            entrance of the moshav and prevented them from entering our home.
          </Typography>
          <Divider sx={{ margin: 2 }}></Divider>
          <Box sx={{ textAlign: "center" }}>
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/2YuPCIJtPW0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default AboutPage;
