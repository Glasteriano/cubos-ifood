initialInnbyggertall = 1_000, overfoeringTall = 4, doegn = 7

let totallSmittet = initialInnbyggertall * (overfoeringTall ** (doegn / 7))

console.log(`Etter ${doegn} døgn, ${totallSmittet} folk skal bli smittet.`)