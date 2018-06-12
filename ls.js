module.exports = function(data, err, files){
    const cmd = data.toString().trim()
    if(cmd === 'ls'){
        (err, files) => {
            if(err){
                throw err;
            } else {
                process.stdout.write(files.join('\n'))
                process.stdout.write('\nlsprompt > ');
            }
        }

    }
}
