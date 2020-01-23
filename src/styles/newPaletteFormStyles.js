import {DRAWER_WIDTH} from '../constants'
const drawerWidth = DRAWER_WIDTH


export default theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
	},
	colorPickerContainer: {
		width: "100%",
		padding: "0 5%",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",

	},
	buttons: {
		width: "100%",
		margin: "10px 0 20px 0",
	},
	button: {
		width: "50%"
	}
});