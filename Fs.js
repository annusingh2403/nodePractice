const fs = require('fs');
const { resourceUsage } = require('process');

// const first = fs.writeFileSync('./content/first.txt','this is first text file');
// const first = fs.readFileSync('./content/first.txt','utf8');

// console.log(first);

fs.readFile('./content/first.txt','utf8',(err, result) => {
    if(err){
        console.log(err);
        return
    }else{
        const first = result;
        console.log(first);
    }
})


