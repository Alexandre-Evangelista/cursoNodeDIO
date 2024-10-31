async function connectToDatabase(dataName) {
    console.log(`se conectando com o banco ${dataName}`);
}

async function disconnectData() {
    console.log(`se desconectando do banco`);
}

export{connectToDatabase,disconnectData};