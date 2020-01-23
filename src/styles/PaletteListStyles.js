export default {
    mainContainer: {
        backgroundColor: "lightblue",
        height: "100vh",

    },
    listContainer: {
        width: "50%",
        margin: "auto",
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
        paddingTop: "20px",
        "& a":{
            color: "white"
        }
    },
    palettesContainer: {
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        gridGap: "3% 3%"
    },

}