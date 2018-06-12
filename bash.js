const pwd = require('./pwd');
const fs = require('fs');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    pwd(data);
});

fs.readdir('./', 'utf8', (data, err, files)=>{
    ls(err,files);
})
