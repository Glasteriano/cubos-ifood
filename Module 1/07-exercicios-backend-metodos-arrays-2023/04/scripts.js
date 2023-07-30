function queueConfig(patientArray, operarion, patientName){
    const isSchedule = operarion.toLowerCase() === "schedule";
    const isNext = operarion.toLowerCase() === "next";
    //===============================================================

    if (isSchedule){
        patientArray.push(patientName);
    };
    //===============================================================

    if(isNext){
        patientArray.splice(0, 1);
    };
    //===============================================================
    
    return patientArray.join(", ");
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log(queueConfig(pacientes, "schedule", "Ígor"));
console.log(queueConfig(pacientes, "next", "José"));