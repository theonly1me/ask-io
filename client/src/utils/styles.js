import { createStyles, makeStyles } from '@material-ui/core/styles';

// Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const useStyles = makeStyles(theme =>
  createStyles({
    paperContainer: {
      height: '100vh',
      width: '100vw',
      borderRadius: 0,
    },
    bodyContainer: {
      paddingTop: '100px',
    },
    linkButton: {
      '&:hover': {
        textDecoration: 'none',
      },
    },
    title: {
      fontFamily: 'Sofia, cursive',
      fontSize: 36,
      marginRight: 20,
      textDecoration: 'none',
      color: '#ecf0f1',
    },
    hamburgerMenu: {
      marginLeft: 'auto',
      zIndex: 1,
    },
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundImage: 'url(https://source.unsplash.com/collection/81967371)',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      overflowX: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      top: '100%',
      opacity: '0.8',
      textAlign: 'center',
      margin: 'auto',
      minWidth: '100vw',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    colorText: {
      color: '#c42348',
    },
    bodyLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
    darkModeButton: {
      marginLeft: 15,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    paymentButton: {
      // color: '#fff',
      color: '#c42348',
      [theme.breakpoints.down('sm')]: {
        color: 'inherit',
      },
      paymentIconButton: {
        marginLeft: 50,
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
    },
  })
);

export default useStyles;
