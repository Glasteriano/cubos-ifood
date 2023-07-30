function schedulePatient(patitentArray, patientName){
    patitentArray.push(patientName);

    console.log(patitentArray.join(", "));
};
//==============================================================

function nextPatient(patientArray, patientName){
    const isRightPatient = patientName === patientArray[0];

    if (isRightPatient){
        patientArray.shift();
    };

    console.log((isRightPatient) ? patientArray.join(", ") : "Wrong name for the first patient in the queue!");
};
//==============================================================

function cancelPatient(patientArray, patientName){
    const isInQueue = patientArray.includes(patientName);

    if (isInQueue){
        const indexOfPatient = patientArray.indexOf(patientName);
        patientArray.splice(indexOfPatient, 1)
    };
    
    console.log((isInQueue) ? patientArray.join(", ") : "Patient not in queue yet!");
};
//_____________________________________________________________________________

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
//_____________________________________________________________________________

schedulePatient(pacientes, "Fernando");
console.log();
//------------------------------------------

nextPatient(pacientes, "José");
nextPatient(pacientes, "Marcelo");
console.log();
//------------------------------------------

cancelPatient(pacientes, "João");
cancelPatient(pacientes, "André");