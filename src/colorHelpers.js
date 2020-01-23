import chroma from 'chroma-js';

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