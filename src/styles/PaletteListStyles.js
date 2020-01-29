import sizes from "./size";
import bg from './bg.svg'

export default {
  "@global":{
    ".fade-exit": {
      opacity: "1"
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity 200ms ease-in-out"
    }
  },
  mainContainer: {
    height: "100vh",
    backgroundColor: "#cc81c3",

    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${bg})`,
    overflow: "hidden",
    [sizes.down("sm")]: {
      overflow: "scroll"
    }
  },
  listContainer: {
    width: "53%",
    margin: "auto",
    [sizes.down("lg")]: {
        width: "80%"
    },
    [sizes.down("md")]: {
      width: "90%"
    },
    [sizes.down("xs")]: {
        width: "95%"
    }
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    paddingTop: "20px",
    fontFamily: "'Montserrat', 'sans-serif'",
    "& a": {
      color: "white"
    }
  },
  navTitle: {
      color: "white",
  },
  palettesContainer: {
    display: "grid",
    gridTemplateColumns: "31% 31% 31%",
    gridGap: "1.5rem",
    [sizes.down("sm")]: {
        gridTemplateColumns: "50% 50%",
        
    },
    [sizes.down("xs")]: {
        gridTemplateColumns: "100%",
        padding: "0 10%"
    }
  },
  DeleteDialog: {
    backgroundColor: "#2AA72D",
    color: "#FCEBE7"
  },
  CancelDialog: {
    backgroundColor: "#F35A39",
    color: "#FCEBE7"
  }
};
