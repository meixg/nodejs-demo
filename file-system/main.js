const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'file.txt')

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(stats);

    if (stats.isFile()) {
        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(content);

            fs.writeFile(path.resolve(__dirname, 'new.txt'), content, err => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }

                console.log('complete');
            });
        });
    }
});
