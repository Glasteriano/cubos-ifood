let endA = 6;
let endB = 6;

const bucha = endA === endB

if (bucha) {
    if (endA === 0) {
        console.log("Bucha de branco")
    }
    else if (endA === 1) {
        console.log("Bucha de ás")
    }
    else if (endA === 2) {
        console.log("Bucha de duque")
    }
    else if (endA === 3) {
        console.log("Bucha de terno")
    }
    else if (endA === 4) {
        console.log("Bucha de quadra")
    }
    else if (endA === 5) {
        console.log("Bucha de quina")
    }
    else if (endA === 6) {
        console.log("Bucha de sena")
    }
    else {
        console.log("Número inválido")
    }
}
else {
    console.log("Not doublet")
};