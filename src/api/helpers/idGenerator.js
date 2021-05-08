const newCode = (n)=>{
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let codeGenerate = "";
    let generate = 0;

    for(let i = 0; i<= n - 1; i++){
        generate = Math.floor(Math.random() * (letters.length - 1)+ 1);
        codeGenerate += (letters[generate]).toString();
    }

    return codeGenerate;
}

module.exports = { newCode }