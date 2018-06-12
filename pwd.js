module.exports =
    (data) => {
    const cmd = data.toString().trim()
    //if(err){
        //console.log(err)
    //}
     if(cmd==='pwd'){
        console.log(`${process.cwd()}`);
    }    
    process.stdout.write('\nprompt > ')
};
