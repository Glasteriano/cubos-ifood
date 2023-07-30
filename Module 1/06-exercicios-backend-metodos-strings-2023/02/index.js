function checkCPF(id){
    const isCPF = id.length === 11;
    
    const cpfLayout = `${id.slice(0, 3)}.${id.slice(3, 6)}.${id.slice(6, 9)}-${id.slice(9)}`;

    const result = (isCPF) ? cpfLayout : "Invalid ID";

    console.log(result);
};
//===================================================================

function checkCNPJ(cnpj){
    const isCNPJ = cnpj.length === 14;
    
    const cpfLayout = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;

    const result = (isCNPJ) ? cpfLayout : "Invalid ID";

    console.log(result);
};
//_____________________________________________________________________________

const cpf = "12345678900";
const cpf2 = "1234567890";
const cnpj = "12345678000199";
const cnpj2 = "1234567800019";
//_____________________________________________________________________________

checkCPF(cpf)
checkCPF(cpf2)
checkCNPJ(cnpj);
checkCNPJ(cnpj2);