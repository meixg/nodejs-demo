const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'file.txt');
const fsp = fs.promises;

async function run() {
    try {
        const stats = await fsp.stat(filePath);
        console.log(stats);

        const content = await fsp.readFile(filePath);
        console.log(content);

        await fsp.writeFile(path.resolve(__dirname, 'new.txt'), content);
        console.log('complete');
    }
    catch (e) {
        console.error(e);
        process.exit(0);
    }
}

run();