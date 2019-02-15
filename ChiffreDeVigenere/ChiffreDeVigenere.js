const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Word:', (word) => {
    rl.setPrompt('Key:');
    rl.prompt();
    rl.on('line', (key) => { 
        let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', arrAlph = [alph], longKey = '', result = '', t = 0;
        
        for(let i = 1; i < 27; ++i){
            let str = arrAlph[i - 1];
            str += str[0];
            str = str.slice(-str.length + 1);
            arrAlph[i] = str;
        }

        for(let i = 0; i < word.length; ++i){
            longKey += key[t];
            ++t;
            t = t == key.length ? 0 : t;
        }

        for(let i = 0; i < word.length; ++i){
            result += arrAlph[alph.indexOf(longKey[i])][alph.indexOf(word[i])];
        }

        console.log(result);

       rl.close();
    })
})
