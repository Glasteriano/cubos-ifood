function friendlyURL(url){
    let modifiedUrl = url.toLowerCase();

    while (modifiedUrl.includes(" ")){
        modifiedUrl = modifiedUrl.replace(" ", "-");
    }

    return modifiedUrl;
};
//_____________________________________________________________________________

const texto = "Aprenda programar do zero na Cubos Academy";
//_____________________________________________________________________________

console.log(friendlyURL(texto));
