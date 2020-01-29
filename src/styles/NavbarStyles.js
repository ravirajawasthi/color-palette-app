import sizes from './size'

export default  {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    
    
    logo: { 
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        },
        [sizes.down("xs")]: {
            display: "none"
        }

    },
    
    slider: {
        width: "340px",
        display: "flex",
        alignItems: "center",
        "& .rc-slider-track": {
            background: "transparent",
        },
        
        "& .rc-slider-rail": {
            height: "8px",
        },
        " & .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle": {
            background: "green",
            outline: "none",
            border: "2px solid green",
            marginLeft: "-2px",
            marginTop: "-3px",
        },
        
        "& .slider-level": {
            fontSize: "1.1rem",
            width: "9rem",
            marginLeft: "20px",
        }
    },
    selectMenu: {
        marginLeft: "auto",
        marginRight: "10px",
    },
}
