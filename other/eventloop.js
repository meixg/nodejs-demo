const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('setTimeout');
    });
    setImmediate(() => {
        console.log('setImmediate');
    });
});
