import { Container, Link as MuiLink, Typography } from '@mui/material';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { Link } from 'react-router-dom';

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem',
    width: '100vw',
    p: '0.5rem',
    '@media screen and (min-width : 768px)': {
      background: '#D1EFEC',
    },
  },
  headerContainerTitle: {
    fontSize: '2rem',
    fontStyle: 'italic',
    ml: '2%',
    '@media screen and (min-width : 768px)': {
      fontSize: '2.5em',
    },
  },
  tagline: {
    display: 'none',
    '@media screen and (min-width : 768px)': {
      display: 'flex',
    },
  },
  headerLogo: {
    '@media screen and (min-width : 768px)': {
      display: 'none',
    },

  },

} as const;
function HeaderLoggedOut() {
  return (
    <Container
      component="div"
      className="header__container"
      maxWidth={false}
      sx={styles.headerContainer}
    >
      <PedalBikeIcon
        className="header-logo"
        sx={styles.headerLogo}
        fontSize="large"
      />
      <Link to="/">
        <MuiLink underline="none" color="inherit">
          <Typography
            component="h1"
            className="header__container__title"
            sx={styles.headerContainerTitle}
          >
            BikeEnd
          </Typography>
        </MuiLink>
      </Link>
      <Typography
        component="h2"
        className="tagline hidden"
        sx={styles.tagline}
      >
        Le planificateur des week-ends qui font du bien à la tête et à la planète !
      </Typography>
    </Container>
  );
}

export default HeaderLoggedOut;
