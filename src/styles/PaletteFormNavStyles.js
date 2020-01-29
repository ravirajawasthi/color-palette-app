import DRAWER_WIDTH from '../constants'
import sizes from './size'
const drawerWidth = DRAWER_WIDTH

export default theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    maxWidth: "100%"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    [sizes.down("sm")]: {
      margin: "0"
    }
  },
  hide: {
    display: "none"
  },
  navbarMainContent: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navForm: {
    margin: "0 20px",
    "& a": {
      textDecoration: "none"
    },
    [sizes.down("xs")]:{
      margin: "0"
    }
  },
  actionBtns: {
    margin: "0 0.5rem",
    display: "inline",
    "& button": {
      [sizes.down('sm')]:{
        margin: "0 2px",
        padding: "0.2rem"
      }
    }
  }
});
