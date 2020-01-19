import chroma from 'chroma-js'

export default {
    textColor: {
        color: props => chroma(props.background).luminance() >= 0.08 ? "black" : "white"
    },
    seeMore:{
        position:"absolute",
        width:"70px",
        lineHeight:"30px",
        height:"30px",
        background:"rgba(255, 255, 255, 0.4)",
        border:"none",
        bottom:"0",
        right:"0",
        fontSize:"15px",
        textAlign:"center",
    },
    ColorBox : {
        height: props => props.singleColorMode ? "50%": "25%",
        width: "20%",
        display: "inline-block",
        position: "relative;  ",
        margin: "0 auto",
        cursor: "pointer",
        marginBottom: "-3.7px",
        "&:hover button": {
            opacity: "1",
            transition: "0.2s opacity ease-in-out"
        }
    },
    copyButton: {
        position:"absolute",
        width:"100px",
        height:"30px",
        marginRight:"-50px",
        marginTop:"-15px",
        background:"rgba(255, 255, 255, 0.4)",
        border:"none",
        top:"50%",
        right:"50%",
        fontSize:"15px",
        textDecoration:"none",
        opacity:"0",
    },

    ColorBoxName: {
        position: "absolute",
        bottom: "0px",
        left: "0px",
        textTransform: "uppercase",
        padding: "6px",
        fontSize: "1rem",
}

    
}