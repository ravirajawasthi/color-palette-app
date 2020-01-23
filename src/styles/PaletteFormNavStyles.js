import DRAWER_WIDTH from '../constants'
const drawerWidth = DRAWER_WIDTH

export default theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
    marginRight: 20
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
    }
  },
  actionBtns: {
    margin: "0 0.5rem",
    display: "inline"
  }
});
