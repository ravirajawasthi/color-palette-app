import chroma from 'chroma-js';
// {
//     paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//       { name: "purple", color: "#9C27B0" },
//       { name: "deeppurple", color: "#673AB7" },
//       { name: "indigo", color: "#3F51B5" },
//       { name: "blue", color: "#2196F3" },
//       { name: "lightblue", color: "#03A9F4" },
//       { name: "cyan", color: "#00BCD4" },
//       { name: "teal", color: "#009688" },
//       { name: "green", color: "#4CAF50" },
//       { name: "lightgreen", color: "#8BC34A" },
//       { name: "lime", color: "#CDDC39" },
//       { name: "yellow", color: "#FFEB3B" },
//       { name: "amber", color: "#FFC107" },
//       { name: "orange", color: "#FF9800" },
//       { name: "deeporange", color: "#FF5722" },
//       { name: "brown", color: "#795548" },
//       { name: "grey", color: "#9E9E9E" },
//       { name: "bluegrey", color: "#607D8B" }
//     ]
//   }

function generatePalette(seedColor) {
    const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    let level = 0
    let color = "#FFF"
    let newPalette = {
        paletteName: seedColor.paletteName,
        id: seedColor.id,
        emoji: seedColor.emoji,
        colors: []
    }
    for (level of levels) {
        newPalette.colors[level] = [];
    }
    let colorObj = {}
    for (color of seedColor.colors) {
        let colors = generateScale(color.color, 10).reverse()
        let i = 0
        for (i in levels) {
            colorObj = {
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                rgb: chroma(colors[i]).css(),
                hex: colors[i],
                rgba: chroma(colors[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            }
            newPalette.colors[levels[i]].push(colorObj)
        }

    }
    return newPalette
}

function generateScale(hexColor, N) {
    return chroma.scale([chroma(hexColor).darken(1.5), hexColor, "#FFF"]).mode('lab').colors(N);
}


export default generatePalette