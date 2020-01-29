import sizes from './size';

export default  {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    PaletteColors: {
        height: "90vh"
    },
    whiteColor: {
        color: "white"
    },
    blackColor: {
        color: "black"
    },
    goBack: {
        background: "black",
        height: "50%",
        width: "20%",
        display: "inline-block",
        position: "relative;  ",
        margin: "0 auto",
        cursor: "pointer",
        marginBottom: "-3.7px",
        "& a": {
            position: "absolute",
            width: "100px",
            height: "30px",
            marginRight: "-50px",
            marginTop: "-15px",
            background: "rgba(255, 255, 255, 0.4)",
            border: "none",
            top: "50%",
            right: "50%",
            fontSize: "15px",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
        },
        [sizes.down("lg")]: {
            height: "33.3333333%",  
            width: "25%"
        },
        [sizes.down("md")]: {
            height: "20%",
            width: "50%"
        },
        [sizes.down("sm")]: {
            height: "10%",
            width: "100%"
        }
    },
}