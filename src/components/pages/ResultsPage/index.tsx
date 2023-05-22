/* eslint-disable react/jsx-no-bind */
import {
  Box,
  Card, CardContent, CardMedia, Container, Grid, IconButton, Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import destinationImage from '../../../assets/images/result-card_background.png';
import './styles.scss';

const styles = {

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    width: '80%',

  },
  card: {
    margin: 'auto',
    position: 'relative',
    border: 'solid 2px',

  },
  image: {
    opacity: 0.2,
    backgroundSize: 'cover',
  },
  content: {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '70%',
    width: '100%',
  },
  favoriteIcon: {
    position: 'absolute',
    top: '8px',
    right: '8px',
  },

};

function ResultsPage() {
  const results = [
    {
      destination: 'Destination 1',
      travelTime: '30 minutes',

    },
    {
      destination: 'Destination 2',
      travelTime: '1 heures',
    },
    {
      destination: 'Destination 3',
      travelTime: '2 heures',
    },
    {
      destination: 'Destination 4',
      travelTime: '35 minutes',
    },
    {
      destination: 'Destination 5',
      travelTime: '25 minutes',
    },
    {
      destination: 'Destination 6',
      travelTime: '1 heures 30',
    },
    {
      destination: 'Destination 7',
      travelTime: '55 minutes',
    },
    {
      destination: 'Destination 8',
      travelTime: '1 heures',
    },
  ];

  return (

    <Container maxWidth={false}>
      <Typography
        color="black"
        align="center"
        sx={{
          fontSize: '1em',
          fontWeight: 'bold',
        }}
      >
        De nouveaux horizons à découvrir depuis POINT DE DEPART($). En selle !`
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {results.map((result, index) => (
          <Grid item key={index} xs={6} sm={8} md={3}>
            <Card sx={styles.card}>
              <IconButton sx={styles.favoriteIcon}>
                <FavoriteIcon />
              </IconButton>
              <CardMedia
                sx={styles.image}
                component="img"
                image={destinationImage}
                alt={result.destination}
              />
              <CardContent sx={styles.content}>
                <Typography
                  color="black"
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.2em',
                  }}
                >
                  {result.destination}
                </Typography>
                <Typography
                  color="black"
                  align="center"
                  sx={{ fontSize: '1em' }}
                >
                  {result.travelTime}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

  );
}

export default ResultsPage;