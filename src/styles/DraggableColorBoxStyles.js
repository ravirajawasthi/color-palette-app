import sizes from './size'
export default {
    root: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        position: "relative;  ",
        margin: "0 auto",
        cursor: "pointer",
        marginBottom: "-6px",
        [sizes.down("lg")]: {
            height: props => props.singleColorMode ? "33.333%": "20%",
            width: "25%"
        },
        [sizes.down("md")]: {
            height: props => props.singleColorMode ? "20%": "10%",
            width: "50%"
        },
        [sizes.down("sm")]: {
            height: props => props.singleColorMode ? "10%": "5%",
            width: "100%"
        }
    },
    boxContainer:{
        position: "absolute",
        bottom: "0",
        width: "100%",
        boxSizing: "border-box",
    },
    boxContent: {
        boxSizing: "border-box",
        padding: "5px 10px",
        display: "flex",
        justifyContent: "space-between",
        color: "rgb(0,0,0,0.5)",
        "& svg:hover":{
            color: "white",
            transform: "scale(1.4)"
        }
    },
    boxName: {
        fontSize: "1rem",
        textTransform: "uppercase"
    },
    boxDelete: {
        transition: "all 0.3s ease-in-out"
    }
}