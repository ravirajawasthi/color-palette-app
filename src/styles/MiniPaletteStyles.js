export default {
    mainContainer: {
        textTransform: "none",
        borderRadius: "5px",
        padding: "5px",
        lineHeight: "2.2rem",
        backgroundColor: "white",
        position: "relative",
        cursor: "pointer",
        "&:hover svg":{
            opacity: "1"
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1rem",
        fontWeight: "500",
        cursor: "pointer"
    },
    MiniPaletteContainer: {
        height: "150px",
        width: "100%",
        backgroundColor: "grey",
        display: "flex",
        alignContent: "flex-start",
        flexWrap: "wrap",
        overflow: "hidden",
        boxSizing: "border-box",

    },
    MiniBox: {
        height: "20%",
        width: "25%",
        display: "inline-block",
        margin: "0",
        padding: "0",
    },
    DeleteIcon: {
        backgroundColor: "red",
        zIndex: "5",
        position: "absolute",
        right: "0",
        top: "0",
        color: "white",
        padding: "5px",
        borderRadius: "2px",
        opacity: "0",
        transition: "all 0.3s ease-in",
    },
    DeleteIconContainer:{
        overflow: "hidden"
    }
}
