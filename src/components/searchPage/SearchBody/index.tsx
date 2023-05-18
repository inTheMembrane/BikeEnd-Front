/* eslint-disable import/no-extraneous-dependencies */
import {
  Button,
  Container, Divider, InputAdornment, TextField, Typography,
} from '@mui/material';
import { Image } from 'mui-image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import testImg from '../../../assets/images/test-searchPage-desktop.jpg';

const styles = {
  container: {
    '@media only screen and (min-device-width : 768px)': {
      maxWidth: '50%',
      // marginLeft: '25%',
    },
  },
  containerTitle: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 'bold',
    mt: '2rem',
    '@media only screen and (min-device-width : 768px)': {
      fontWeight: 'bolder',
      fontSize: '1.8rem',
      paddingBottom: '0.5rem',
    },
  },
  containerSearchForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.7rem',
    px: '1.5rem',
    mt: '1rem',
  },
  searchFormFilterSection: {
    display: 'flex',
    justifyContent: 'space-between',
    px: '0',
  },
  searchFormInputFilter: {
    padding: '0.6rem',
    width: '40vw',
  },
  filterFormCriteria: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '100px',
    marginTop: '1.2rem',
  },
  filterFormTitle: {
    fontSize: '1.15rem',
    p: '1rem',
    height: '100%',
    width: '35%',
  },
  filterFormInput: {
    width: '60%',
  },
  filterFormBtn: {
    display: 'flex',
    flexDirection: 'column',
    mt: '1rem',
    gap: '0.8rem',
  },
  desktopContainer: {
    '@media only screen and (min-device-width : 768px)': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  desktopContainerImg: {
    '@media only screen and (min-device-width : 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  containerSubtitle: {
    '@media only screen and (min-device-width : 768px)': {
      fontStyle: 'italic',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '2rem',
    },
  },
  underline: {
    display: 'none',
    '@media only screen and (min-device-width : 768px)': {
      color: '#9EADBA',
      display: 'block',
    },
  },

} as const;

function SearchBody() {
  return (
    <Container
      className="desktop-container"
      sx={styles.desktopContainer}
    >
      <Container
        component="main"
        className="container"
        sx={styles.container}
      >
        <Typography
          component="h1"
          className="container__title"
          sx={styles.containerTitle}
        >
          De nouveaux horizons à découvrir. En selle !
        </Typography>
        <Typography
          component="h2"
          className="container__subtitle hidden"
          sx={styles.containerSubtitle}
        >
          Saisissez votre voyage
        </Typography>
        <Divider
          className="underline"
          sx={styles.underline}
        />
        <Container
          component="section"
          className="container__search-form"
          sx={styles.containerSearchForm}
        >
          <TextField
            className="search-form__input-city"
            fullWidth
            name="city-start"
            placeholder="Lieu de départ"
            aria-placeholder="Lieu de départ"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className="search-form__input-city"
            fullWidth
            name="city-end"
            placeholder="Lieu d'arrivé"
            aria-placeholder="Lieu d'arrivé"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
          <Container
            component="article"
            className="search-form__filter-section"
            disableGutters
            sx={styles.searchFormFilterSection}
          >
            <TextField
              fullWidth
              className="search-form__input-filter"
              sx={{ marginRight: '0.6rem' }}
              type="date"
              name="date"
              color="success"
            />
            <TextField
              fullWidth
              className="search-form__input-filter"
              type="time"
              name="time"
              color="success"
            />
          </Container>
        </Container>
        <Container
          component="section"
          className="container__filter-form"
        />
        <Container
          component="article"
          className="filter-form__criteria"
          sx={styles.filterFormCriteria}
        >
          <Typography
            component="h2"
            className="filter-form__title"
            sx={styles.filterFormTitle}
          >
            Filtres :
          </Typography>
          <TextField
            size="small"
            type="number"
            placeholder="Budget"
            className="filter-form__input_euro"
            sx={styles.filterFormInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EuroRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            size="small"
            className="filter-form__input_journey-travel"
            type="text"
            placeholder="Temps de trajet"
            sx={styles.filterFormInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <UpdateRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Container>
        <Container
          component="article"
          className="filter-form__btn"
          sx={styles.filterFormBtn}
        >
          <Button
            className="filter-form__btn-search"
            type="button"
            size="large"
            variant="contained"
            color="success"
          >
            Recherche
          </Button>
          <Button
            className="filter-form__btn-reset"
            type="button"
            size="large"
            variant="contained"
            color="error"
          >
            Réinitialiser
          </Button>
        </Container>
      </Container>
      <Container
        className="desktop-container__img"
        sx={styles.desktopContainerImg}
      >
        <Image
          className="desktop-img hidden"
          src={testImg}
          alt="town"
          width={550}
          height={500}
          fit="cover"
          duration={1500}
          easing="cubic-bezier(0.7, 0, 0.6, 1)"
          shift="left"
          distance="500px"
          shiftDuration={900}
          style={{ paddingLeft: '6rem', marginTop: '9rem' }}
        />

      </Container>
    </Container>

  );
}

export default SearchBody;