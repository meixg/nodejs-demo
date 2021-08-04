const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'file.txt');
const fsp = fs.promises;

fsp
    .stat(filePath)
    .then(stats => {
        console.log(stats);
        if (stats.isFile()) {
            return fsp.readFile(filePath);
        }
    })
    .then(content => {
        console.log(content);
        return fsp.writeFile(path.resolve(__dirname, 'new.txt'), content);
    })
    .then(() => {
        console.log('complete');
    })
    .catch(e => {
        console.error(e);
        process.exit(0);
    });
