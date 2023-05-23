import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Container, Link, Typography,
} from '@mui/material';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    my: '0.5rem',
    '@media screen and (min-width : 768px)': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '15rem',
      alignItems: 'center',
      textAlign: 'center',
      width: '100vw',
      height: '5rem',
      px: '3rem',
      m: '0',
      marginBottom: '1rem',
      background: '#D1EFEC',
    },
  },
  headerTitleTagline: {
    display: 'none',
    '@media screen and (min-width : 768px)': {
      display: 'flex',
      width: '60rem',
      alignItems: 'center',
    },
  },
  headerTagline: {
    '@media screen and (min-width: 768px)': {
      paddingLeft: '0.7rem',
      fontSize: '1.44rem',
    },
  },
  headerTitle: {
    fontSize: '2rem',
    fontStyle: 'italic',
    fontWeight: 'bold',
    ml: '2%',
  },
  headerContainerRightIcons: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'flex-end',
    '@media screen and (min-width: 768px)': {
      width: 'auto',
    },
  },
} as const;

function SearchHeader() {
  return (
    <Container
      component="header"
      className="header"
      maxWidth={false}
      sx={styles.header}
    >
      <Link
        className="header__link"
        href="/"
      >
        <TravelExploreRoundedIcon
          fontSize="large"
          color="action"
        />
      </Link>
      <Container
        component="section"
        className="header__title-tagline"
        sx={styles.headerTitleTagline}

      >
        <Typography
          component="h2"
          className="header__title hidden"
          sx={styles.headerTitle}
        >
          BikeEnd
        </Typography>
        <Typography
          className="header__tagline hidden"
          sx={styles.headerTagline}
        >
          Le planificateur des week-ends qui font du bien à la tête et à la planète !
        </Typography>
      </Container>
      <Container
        component="section"
        disableGutters
        className="header__container-right-icons"
        sx={styles.headerContainerRightIcons}
      >
        <Link
          className="header__link"
          href="/favorite"
        >
          <FavoriteIcon
            fontSize="large"
            color="action"
          />
        </Link>
        <Link
          className="header__link"
          href="/myaccount"
        >
          <AccountCircleRoundedIcon
            fontSize="large"
            color="action"
          />
        </Link>
      </Container>

    </Container>
  );
}

export default SearchHeader;
