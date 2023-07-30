function checkExtension(file){
    const isJpg = file.includes(".jpg");
    const isJpeg = file.includes(".jpeg");
    const isGif = file.includes(".gif");
    const isPng = file.includes(".png");

    const isValid = isJpg || isJpeg || isGif || isPng;

    return (isValid) ? "Valid file" : "Invalid file";
};


//___________________________________________________________________
//___________________________________________________________________

const nomeArquivo = 'Foto da Familia.pdf';
//___________________________________________________________________
//___________________________________________________________________

console.log(checkExtension(nomeArquivo));