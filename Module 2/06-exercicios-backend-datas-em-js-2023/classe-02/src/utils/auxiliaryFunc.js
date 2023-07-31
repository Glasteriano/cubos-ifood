const fsPromises = require("fs/promises");
//===========================================

async function sorting(file) {
    const employeesList = await fsPromises.readFile(file);
    const parseFile = JSON.parse(employeesList);
    //---------------------------------------------------------

    parseFile.sort((a, b) => {
        a = new Date(a.registered);
        b = new Date(b.registered);

        return (+a) - (+b);
    });
    //---------------------------------------------------------

    const fileStringify = JSON.stringify(parseFile);

    // write in a new file the sorted
    await fsPromises.writeFile("./dataBase/sortedEmployees.json", fileStringify);
};
//===========================================

module.exports = {
    sorting
};